const fuzz = require('fuzzball'); // NPM Package Info https://www.npmjs.com/package/fuzzball
const { responses, locations} = require('../data/database'); // Stand-in for external MongoDB instance

// TODO: Example URL for direct course catalog search https://catalog.ivytech.edu/search_advanced.php?cur_cat_oid=9&ecpage=1&cpage=1&ppage=1&pcpage=1&spage=1&tpage=1&search_database=Search&filter%5Bkeyword%5D=SDEV120&filter%5Bexact_match%5D=1&filter%5B3%5D=1&filter%5B31%5D=1
// TODO: Example URL for course detail page https://catalog.ivytech.edu/preview_course_nopop.php?catoid=9&coid=40333

const errorStatements = [
    "I'm not sure what you meant by that.",
    "Hmmm...try rephrasing that question",
    "Hmmm..I'm stumped, try asking that another way"
];

function getLocationIndexFromPrompt(prompt)
{
    console.log('GETTING LOCATION');
    console.log('RECEIVED PROMPT:' + prompt);

    options = {
        scorer: fuzz.token_set_ratio, // Any function that takes two values and returns a score, default: ratio
        processor: choice => choice.title,  // Takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
        limit: 1, // Max number of top results to return, default: no limit / 0.
        cutoff: 50, // Lowest score to return, default: 0
        force_ascii: true
    };

    var results = fuzz.extract(prompt, locations, options);

    console.log('RESULTS');
    console.log(results);

    if (results == null) return -1;
    if (results.length == 0) return -1;

    if (results[0][2] != null)
    {
        return (results[0][2]);
    } else {
        return -1;
    }
}

module.exports.query = (req, res) => {
    var n = Math.floor(Math.random() * 3);
    var prompt = (req.body.prompt).toLowerCase();
    var reply = "";
    var link = "";
    var url = "";
    var response = ""; 
    var suffix = "&nbsp;<i class='bx bx-link-external'></i></a>";

    options = {
        //scorer: fuzz.token_set_ratio, // Any function that takes two values and returns a score, default: ratio
        scorer: fuzz.token_similarity_sort_ratio, // Any function that takes two values and returns a score, default: ratio
        processor: choice => choice.pattern,  // Takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
        limit: 2, // Max number of top results to return, default: no limit / 0.
        cutoff: 60, // Lowest score to return, default: 0
        force_ascii: true,
        //unsorted: false // Results won't be sorted if true, default: false. If true limit will be ignored.
    };

    var results = fuzz.extract(prompt, responses, options);
    
    if (results.length !=0){
        console.log(prompt);
        console.log(results);        

        //handle special lookups
        switch (results[0][0].type)
        {
            case 'ADDRESS_LOOKUP':
                var index = getLocationIndexFromPrompt(prompt);
                console.log('RETURNED: ' + index);            

                if(index > -1)
                {
                    response = "<strong>"+ locations[index].title + " Campus:</strong><br>"
                    response += locations[index].address;
                    response += `<br><br><a href='https://www.ivytech.edu/${locations[index].url}' target='_blank'>Campus Page${suffix}`
                    response += `<br><a href='https://www.google.com/maps/search/?api=1&query=${locations[index].position.lat},${locations[index].position.lng}' target='_blank'>Google Maps${suffix}`;
                    
                } else {
                    response = errorStatements[n];
                }
                break;
            case 'PHONE_LOOKUP':
                var index = getLocationIndexFromPrompt(prompt);
                console.log('RETURNED: ' + index);

                if(index > -1)
                {
                    response = "<strong>"+ locations[index].title + " Contact Info:</strong><br>"
                    response += `<i class='bx bxs-phone-call'></i>&nbsp;&nbsp;<a href='tel:${locations[index].phone}'>${locations[index].phone}</a><br>`;
                    response += `<i class='bx bxs-envelope' ></i>&nbsp;&nbsp;<a href="mailto:${locations[index].email}">${locations[index].email}</a>`;
                    response += `<br><br><a href='https://www.ivytech.edu/${locations[index].url}' target='_blank'>Campus Page${suffix}`;
                } else {
                    response = errorStatements[n];
                }
                break;
            default:
                response = results[0][0].reply;
                break;
        }
        
        //append url data if it exists
        if (results[0][0].url){
            response += `<br><br><a href='${results[0][0].url}' target='_blank'>${results[0][0].link}${suffix}`;
        }  
    } else {
        response = errorStatements[n];
    } 

    //res.render('index', {title: 'Home', query: req.body.prompt, response: response});
    console.log(response);
    res.json({response});    
}

module.exports.response = (req, res) => {
    res.render('index', {title: 'Home'});    
}