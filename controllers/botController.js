const User = require('../models/User');
const Course = require('../models/course');
const fuzz = require('fuzzball'); // NPM Package Info https://www.npmjs.com/package/fuzzball

const errorStatements = [
    "I'm not sure what you meant by that.",
    "Hmmm...try rephrasing that question",
    "Hmmm..I'm stumped, try asking that another way"
];

module.exports.query = (req, res) => {
    var n = Math.floor(Math.random() * 3);
    var prompt = (req.body.prompt).toLowerCase();
    var reply = "";
    var link = "";
    var url = "";
    var response = ""; 
    var suffix = "&nbsp;<i class='bx bx-link-external'></i></a>";
    
    var responses = [
        {
            pattern: "would you like to play a game",
            reply: "The only winning move is not to play."
        },
        {
            pattern: "what are you",
            reply: "I am a node.js / ejs interactive chatbot developed for SDEV265 as a School of IT information resource and a capstone project for the course."
        },
        {
            pattern: "what's your name",
            reply: "My full name is IvyBot, but you can call me Ivy"
        },
        {
            pattern: "ivytech phone number",
            reply: "888-489-5463 <br> 888-IVY-LINE"
        },
        {
            pattern: "what is the address for ivytech",
            reply: "50 W Fall Creek Pkwy N Dr, Indianapolis, IN 46208",
            url: "https://www.google.com/maps/place/North+Meridian+Campus,+50+W+Fall+Creek+Pkwy+N+Dr,+Indianapolis,+IN+46208/@39.8039041,-86.1607404,1191m/data=!3m2!1e3!4b1!4m6!3m5!1s0x886b51233b6f4e0f:0x858dce31fc1836a9!8m2!3d39.8039041!4d-86.1581655!16s%2Fg%2F1hc6yg9jh!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
            link: "Google Maps"
        },
        {
            pattern: "what kind of programs do you offer",
            reply: "Here are the programs you can find at IvyTech!",
            url: "https://www.ivytech.edu/programs/",
            link: "Programs"
        },
        {
            pattern: "does ivytech offer certifications",
            reply: "Certainly!  Here is more information about Degrees and Certifications",
            url: "https://www.ivytech.edu/programs/degrees-certificates/",
            link: "Degrees and Certifications"
        },
        {
            pattern: "how can i apply to the school of it",
            reply: "Here's some information about the application process!",
            url: "https://www.ivytech.edu/admissions/apply-now/",
            link: "Application Process"
        },
        {
            pattern: "what are the minimum credit hours i can take",
            reply: "Here's some information about credit hours!",
            url: "https://ivytech.edusupportcenter.com/shp/ivytech/article?articleId=1510102&pk=192307&articleTag=gh_faapp",
            link: "Credit Hours"
        },
        {
            pattern: "what programs can transfer to a 4 year institution",
            reply: "Here is some information regarding program transfers!",
            url: "https://www.ivytech.edu/programs/special-programs-for-students/transfer-options/#accordion-c09fe912eeb048249ddc340cc1a51ee5-0",
            link: "Participating Schools by Program"
        }
    ]

    
    options = {
        scorer: fuzz.token_set_ratio, // Any function that takes two values and returns a score, default: ratio
        processor: choice => choice.pattern,  // Takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
        limit: 2, // Max number of top results to return, default: no limit / 0.
        cutoff: 50, // Lowest score to return, default: 0
        force_ascii: true
        //unsorted: false // Results won't be sorted if true, default: false. If true limit will be ignored.
    };

    var results = fuzz.extract(prompt, responses, options);
    
    if (results.length !=0){
        console.log(prompt);
        console.log(results);
        response = results[0][0].reply;

        if (results[0][0].url){
            response += `<br><a href='${results[0][0].url}'>${results[0][0].link}${suffix}`;
        }  
    } else {
        response = errorStatements[n];
    } 

    //res.render('index', {title: 'Home', query: req.body.prompt, response: response});
    res.json({response});    
}

module.exports.response = (req, res) => {
    res.render('index', {title: 'Home'});    
}