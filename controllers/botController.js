const fuzz = require('fuzzball'); // NPM Package Info https://www.npmjs.com/package/fuzzball

const errorStatements = [
    "I'm not sure what you meant by that.",
    "Hmmm...try rephrasing that question",
    "Hmmm..I'm stumped, try asking that another way"
];

const locations = [
    {
        position: { lat: 40.0529917, lng: -85.6695955 },
        title: "Anderson",
        type: "campus",
        subhead: "",
        address: "815 E 60th Street\nAnderson, IN 46013",
        phone: "1-765-643-7133",
        email: "askanderson@ivytech.edu",
        url: "/anderson/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=anderson&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.2892662, lng: -85.1971168 },
        title: "Batesville",
        type: "satellite",
        subhead: "Part of the Lawrenceburg Full-Service Campus",
        address: "1 Ivy Tech Drive\nBatesville, IN 47006",
        phone: "1-812-934-3954",
        email: "R11express@ivytech.edu",
        url: "/batesville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=batesville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 38.862617, lng: -86.483899 },
        title: "Bedford",
        type: "satellite",
        subhead: "Part of the Bloomington Full-Service Campus",
        address: "931 15th Street\nBedford, IN 47421",
        phone: "1-812-279-8126",
        email: "bl-info@ivytech.edu",
        url: "/bloomington/index.html",
        contactDirectoryUrl: "",
    },
    {
        position: { lat: 39.1665939, lng: -86.5969688 },
        title: "Bloomington",
        type: "campus",
        subhead: "",
        address: "200 Daniels Way\nBloomington, IN 47404",
        phone: "1-812-330-6013",
        email: "bl-info@ivytech.edu",
        url: "/bloomington/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=bloomington&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.2513699, lng: -85.9028085 },
        title: "Columbus",
        type: "campus",
        subhead: "",
        address: "4475 Central Avenue\nColumbus, IN 47203",
        phone: "1-812-372-9925",
        email: "askcolumbus@ivytech.edu",
        url: "/columbus/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=columbus&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.6576011, lng: -85.1394987 },
        title: "Connersville",
        type: "satellite",
        subhead: "Part of the Richmond Full-Service Campus",
        address: "717 W 21st Street\nConnersville, IN 47331",
        phone: "1-765-966-2656",
        email: "richmondenrollment@ivytech.edu",
        url: "/connersville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=connersville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.0710992, lng: -86.9034835 },
        title: "Crawfordsville",
        type: "satellite",
        subhead: "Part of the Lafayette Full-Service Campus",
        address: "2255 Phil Ward Boulevard\nCrawfordsville, IN 47933",
        phone: "1-765-359-0570",
        email: "asklafayette@ivytech.edu",
        url: "/crawfordsville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=crawfordsville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.4375947, lng: -87.334175 },
        title: "Crown Point",
        type: "campus",
        subhead: "Part of the Lake County Full-Service Campus",
        address: "9900 Connecticut Drive\nCrown Point, IN 46307",
        phone: "1-219-392-3600",
        email: "asklakecounty@ivytech.edu",
        url: "/lakecounty/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=lake+county&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.6401149, lng: -87.4667754 },
        title: "East Chicago",
        type: "campus",
        subhead: "Part of the Lake County Full-Service Campus",
        address: "410 E Columbus Drive\nEast Chicago, IN 46312",
        phone: "1-219-392-3600",
        email: "asklakecounty@ivytech.edu",
        url: "/lakecounty/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=east+chicago&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.6613936, lng: -85.8951058 },
        title: "Elkhart",
        type: "satellite",
        subhead: "Part of the South Bend Full-Service Campus",
        address: "22531 County Road 18\nGoshen, IN 46528",
        phone: "1-574-289-7001",
        email: "asksouthbendelkhart@ivytech.edu",
        url: "/southbendelkhart/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=south+bend_elkhart&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 38.0119772, lng: -87.573088 },
        title: "Evansville",
        type: "campus",
        subhead: "",
        address: "3501 N First Avenue\nEvansville, IN 47710",
        phone: "1-812-426-2865",
        email: "askevansville@ivytech.edu",
        url: "/evansville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=evansville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.1238148, lng: -85.0951904 },
        title: "Fort Wayne",
        type: "campus",
        subhead: "",
        address: "3701 Dean Drive\nFort Wayne, IN 46835",
        phone: "1-260-482-9171",
        email: "askfortwayne@ivytech.edu",
        url: "/fortwayne/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=fort+wayne&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.2805787, lng: -86.5099008 },
        title: "Frankfort",
        type: "satellite",
        subhead: "Part of the Lafayette Full-Service Campus",
        address: "251 E Clinton Street\nFrankfort, IN 46041",
        phone: "1-765-269-5820",
        email: "asklafayette@ivytech.edu",
        url: "/frankfort/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=frankfort&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.489068, lng: -86.0118688 },
        title: "Franklin",
        type: "satellite",
        subhead: "Part of the Columbus Full-Service Campus",
        address: "2205 McClain Drive\nFranklin, IN 46131",
        phone: "1-317-916-6301",
        email: "askcolumbus@ivytech.edu",
        url: "/franklin/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=franklin&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.5551734, lng: -87.336161 },
        title: "Gary",
        type: "campus",
        subhead: "Part of the Lake County Full-Service Campus",
        address: "3491 Broadway\nGary, IN 46409",
        phone: "1-219-392-3600",
        email: "asklakecounty@ivytech.edu",
        url: "/lakecounty/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=lake+county&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.6390505, lng: -86.8394951 },
        title: "Greencastle",
        type: "satellite",
        subhead: "Part of the Terre Haute Full-Service Campus",
        address: "915 S Zinc Mill Road\nGreencastle, IN 46135",
        phone: "1-765-653-7410",
        email: "cwhitesel7@ivytech.edu",
        url: "/greencastle/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=greencastle&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.3407354, lng: -85.4784511 },
        title: "Greensburg",
        type: "satellite",
        subhead: "Part of the Columbus Full-Service Campus",
        address: "422 E Central Avenue\nGreensburg, IN 27240",
        phone: "1-812-663-9493",
        email: "askcolumbus@ivytech.edu",
        url: "/greensburg/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=greensburg&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.8053968, lng: -86.1589352 },
        title: "Indianapolis",
        type: "campus",
        subhead: "",
        address: "50 W Fall Creek Parkway N\nIndianapolis, IN 46208",
        phone: "1-317-921-4699",
        email: "askindianapolis@ivytech.edu",
        url: "/indianapolis/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=indianapolis&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.5049668, lng: -86.1064558 },
        title: "Kokomo",
        type: "campus",
        subhead: "",
        address: "1815 E Morgan Street\nKokomo, IN 46901",
        phone: "1-765-459-0561",
        email: "kokomo-enrollment@ivytech.edu",
        url: "/kokomo/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=kokomo&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.6275542, lng: -86.7054035 },
        title: "La Porte",
        type: "satellite",
        subhead: "Part of the Valparaiso Full-Service Campus",
        address: "1900 Whirlpool Drive\nLa Porte, IN 46350",
        phone: "1-219-879-9137",
        email: "askvalparaiso@ivytech.edu ",
        url: "/laporte/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=laporte&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.3838817, lng: -86.8401738 },
        title: "Lafayette",
        type: "campus",
        subhead: "",
        address: "3101 South Creasy Lane\nLafayette, IN 47905",
        phone: "1-765-269-5000",
        email: "asklafayette@ivytech.edu",
        url: "/lafayette/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=lafayette&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.8618239, lng: -86.005368 },
        title: "Lawrence",
        type: "satellite",
        subhead: "Part of the Indianapolis Full-Service Campus",
        address: "9301 East 59th Street\nIndianapolis, IN 46216",
        phone: "1-317-921-4790",
        email: "jlove@ivytech.edu",
        url: "/indianapolis/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=lawrence&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.0925877, lng: -84.8464251 },
        title: "Lawrenceburg",
        type: "campus",
        subhead: "",
        address: "50 Walnut Street\nLawrenceburg, IN 47025",
        phone: "1-812-537-4010",
        email: "R11express@ivytech.edu",
        url: "/lawrenceburg/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=lawrenceburg&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.0355748, lng: -87.1663605 },
        title: "Linton",
        type: "satellite",
        subhead: "Part of the Terre Haute Full-Service Campus",
        address: "140 North Main Street\nLinton, IN 47441",
        phone: "1-812-299-1121",
        email: "askterrehaute@ivytech.edu",
        url: "/linton/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=linton&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.7370836, lng: -86.3553066 },
        title: "Logansport",
        type: "satellite",
        subhead: "Part of the Kokomo Full-Service Campus",
        address: "1 Ivy Tech Way\nLogansport, IN 46947",
        phone: "1-765-459-0561",
        email: "kokomo-enrollment@ivytech.edu",
        url: "/logansport/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=logansport&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 38.7805601, lng: -85.376179 },
        title: "Madison",
        type: "campus",
        subhead: "",
        address: "590 Ivy Tech Drive\nMadison, IN 47250",
        phone: "1-812-265-2580",
        email: "askmadison@ivytech.edu",
        url: "/madison/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=madison&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.5487502, lng: -85.5531909 },
        title: "Marion",
        type: "campus",
        subhead: "",
        address: "261 Commerce Drive\nMarion, IN 46953",
        phone: "1-765-651-3100",
        email: "askmarion@ivytech.edu",
        url: "/marion/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=marion&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.6860089, lng: -86.8931662 },
        title: "Michigan City",
        type: "satellite",
        subhead: "Part of the Valparaiso Full-Service Campus",
        address: "3714 Franklin Street\nMichigan City, IN 46360",
        phone: "1-219-879-9137",
        email: "askvalparaiso@ivytech.edu ",
        url: "/michigan/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=michigan+city&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.7578269, lng: -86.7605172 },
        title: "Monticello",
        type: "satellite",
        subhead: "Part of the Lafayette Full-Service Campus",
        address: "1017 O Connor Boulevard\nMonticello, IN 47960",
        phone: "1-574-583-4891",
        email: "asklafayette@ivytech.edu",
        url: "/monticello/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=monticello&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.6020572, lng: -86.3719876 },
        title: "Mooresville",
        type: "satellite",
        subhead: "Part of the Bloomington Full-Service Campus",
        address: "204 Southbridge Street\nMooresville, IN 46158",
        phone: "1-812-330-6013",
        email: "bl-info@ivytech.edu",
        url: "/mooresville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=mooresville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.1932793, lng: -85.3880015 },
        title: "Muncie",
        type: "campus",
        subhead: "",
        address: "125 S High Street\nMuncie, IN 47305",
        phone: "1-765-289-2291",
        email: "askmuncie@ivytech.edu",
        url: "/muncie/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=muncie&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.8848005, lng: -85.3868921 },
        title: "New Castle",
        type: "satellite",
        subhead: "Part of the Muncie Full-Service Campus",
        address: "3325 IN-3\nNew Castle, IN 47362",
        phone: "1-765-289-2291",
        email: "askmuncie@ivytech.edu",
        url: "/newcastle/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=new+castle&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.0485174, lng: -86.0025229 },
        title: "Noblesville",
        type: "campus",
        subhead: "Known as the Hamilton County Full-Service Campus",
        address: "300 17th Street\nNoblesville, IN 46060",
        phone: "1-317-921-4300",
        email: "askhamiltoncounty@ivytech.edu",
        url: "/hamilton-county/index.html",
        contactDirectoryUrl: "",
    },
    {
        position: { lat: 39.0090723, lng: -85.6439215 },
        title: "North Vernon",
        type: "satellite",
        subhead: "Part of the Columbus Full-Service Campus",
        address: "1200 W O&M Avenue\nNorth Vernon, IN 47264",
        phone: "1-812-346-2468",
        email: "askcolumbus@ivytech.edu",
        url: "/northvernon/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=north+vernon&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 40.748031, lng: -86.0812551 },
        title: "Peru",
        type: "satellite",
        subhead: "Part of the Kokomo Full-Service Campus",
        address: "425 W Main Street\nPeru, IN 46970",
        phone: "1-765-459-0561",
        email: "kokomo-enrollment@ivytech.edu",
        url: "/peru/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=peru&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.6852867, lng: -86.3782541 },
        title: "Plainfield",
        type: "satellite",
        subhead: "Part of the Indianapolis Full-Service Campus",
        address: "610 Reeves Road\nPlainfield, IN 46168",
        phone: "1-317-968-1516",
        email: "ardavis@ivytech.edu",
        url: "/plainfield/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=plainfield&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 38.3204599, lng: -87.5684931 },
        title: "Princeton",
        type: "satellite",
        subhead: "Part of the Evansville Full-Service Campus",
        address: "2431 S Crabtree Drive\nPrinceton, IN 47670",
        phone: "1-812-385-8495",
        email: "askevansville@ivytech.edu",
        url: "/princeton/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=princeton&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.8710943, lng: -84.8807328 },
        title: "Richmond",
        type: "campus",
        subhead: "",
        address: "2357 Chester Boulevard\nRichmond, IN 47374",
        phone: "1-765-966-2656",
        email: "richmondenrollment@ivytech.edu",
        url: "/richmond/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=richmond&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.6101911, lng: -85.4446469 },
        title: "Rushville",
        type: "satellite",
        subhead: "Part of the Richmond Full-Service Campus",
        address: "330 N Main Street\nRushville, IN 46173",
        phone: "1-765-966-2656",
        email: "richmondenrollment@ivytech.edu",
        url: "/richmond/index.html",
        contactDirectoryUrl: "",
    },
    {
        position: { lat: 38.6814526, lng: -85.7927425 },
        title: "Scottsburg",
        type: "satellite",
        subhead: "Part of the Sellersburg Full-Service Campus",
        address: "821 South Lake Rd S\nScottsburg, IN 47170",
        phone: "1-812-246-3301",
        email: "asksellersburg@ivytech.edu",
        url: "/midamerica/index.html",
        contactDirectoryUrl: "",
    },
    {
        position: { lat: 38.3898307, lng: -85.7626284 },
        title: "Sellersburg",
        type: "campus",
        subhead: "",
        address: "8204 Highway 311 \nSellersburg, IN 47150",
        phone: "1-812-246-3301",
        email: "asksellersburg@ivytech.edu",
        url: "/sellersburg/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=sellersburg&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 38.9599308, lng: -85.8593638 },
        title: "Seymour",
        type: "satellite",
        subhead: "Part of the Columbus Full-Service Campus",
        address: "323 Dupont Drive\nSeymour, IN 47274",
        phone: "1-812-519-2923",
        email: "askcolumbus@ivytech.edu",
        url: "/seymour/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=seymour&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.5542436, lng: -85.7810113 },
        title: "Shelbyville",
        type: "satellite",
        subhead: "Part of the Columbus Full-Service Campus",
        address: "2177 Intelliplex Drive\nShelbyville, IN 46176",
        phone: "1-317-392-3243",
        email: "askcolumbus@ivytech.edu",
        url: "/shelbyville/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=shelbyville&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.6616237, lng: -86.2480261 },
        title: "South Bend",
        type: "campus",
        subhead: "",
        address: "220 Dean Johnson Boulevard\nSouth Bend, IN 46601",
        phone: "1-574-289-7001",
        email: "asksouthbendelkhart@ivytech.edu",
        url: "/southbendelkhart/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=south+bend&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 37.9566146, lng: -86.7387402 },
        title: "Tell City",
        type: "satellite",
        subhead: "Part of the Evansville Full-Service Campus",
        address: "1034 31st Street\nTell City, IN 47586",
        phone: "1-812-547-7915",
        email: "kking312@ivytech.edu",
        url: "/tellcity/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=tell+city&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 39.3711671, lng: -87.3923176 },
        title: "Terre Haute",
        type: "campus",
        subhead: "",
        address: "8000 South Education Drive\nTerre Haute, IN 47802",
        phone: "1-812-299-1121",
        email: "askterrehaute@ivytech.edu",
        url: "/terrehaute/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=terre+haute&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.462292, lng: -87.0223423 },
        title: "Valparaiso",
        type: "campus",
        subhead: "",
        address: "3100 Ivy Tech Drive\nValparaiso, IN 46383",
        phone: "1-219-464-8514",
        email: "askvalparaiso@ivytech.edu ",
        url: "/valparaiso/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=valparaiso&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    },
    {
        position: { lat: 41.2735825, lng: -85.8718338 },
        title: "Warsaw",
        type: "satellite",
        subhead: "Part of the Fort Wayne Full-Service Campus",
        address: "2545 Silveus Crossing\nWarsaw, IN 46582",
        phone: "1-574-267-5428",
        email: "askwarsaw@ivytech.edu",
        url: "/warsaw/index.html",
        contactDirectoryUrl: "https://whitepages.ivytech.edu/?first_name=&last_name=&userid=&location=warsaw&role=faculty&role=staff&title=&bee_syrup_tun=&submit=+Search+",
    }
]

const responses = [
    {
        pattern: "would you like to play a game",
        reply: "The only winning move is not to play."
    },
    {
        pattern: "how are you today",
        reply: "Doing great!  I'm excited to help you find the information you require!"
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
        pattern: "what can i call you",
        reply: "My full name is IvyBot, but you can call me Ivy"
    },
    {
        pattern: "who is the dean of the school of it",
        reply: "Patrick Benner",
        url: "https://whitepages.ivytech.edu/profile/pbenner/",
        link: "White Pages Entry"
    },
    {
        pattern: "who is instructor for SDEV265",
        reply: "Dr. Steven Carver",
        url: "https://whitepages.ivytech.edu/profile/scarver/",
        link: "White Pages Entry"
    },
    {
        pattern: "ivytech phone number",
        reply: "IvyTech is available 24 hours a day, 7 days a week at the following number: <br><br> <a href='tel:888-489-5463'>888-489-5463</a> (Toll-Free) <br> <a href='tel:888-IVY-LINE'>888-IVY-LINE</a> (Toll-Free) <br><br> You can find additional ways to contact us below:",
        url: "https://www.ivytech.edu/contact-us/",
        link: "Contact Us"
    },
    {
        pattern: "what is the address for ivytech",
        reply: "<strong>Main Campus:</strong> <br>50 W Fall Creek Pkwy N Dr, Indianapolis, IN 46208",
        url: "https://www.google.com/maps/place/North+Meridian+Campus,+50+W+Fall+Creek+Pkwy+N+Dr,+Indianapolis,+IN+46208",
        link: "Google Maps"
    },
    {
        pattern: "what is the address",
        reply: "",
        url: "",
        link: "",
        type: "LOOKUP"
    },
    {
        pattern: "what is the address for",
        reply: "",
        url: "",
        link: "",
        type: "LOOKUP"
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
    },
    {
        pattern: "what programs and courses are available",
        reply: "Ivy Tech offers more than 70 programs including Nursing, Cloud Technologies, Cybersecurity, Precision Agriculture, and Business Administration.",
        url: "https://www.ivytech.edu/programs/all-academic-programs/",
        link: "All Academic Programs"
    },
    {
        pattern: "how do I apply to Ivy Tech",
        reply: "You can apply to Ivy Tech by following the steps outlined in their admissions process.",
        url: "https://www.ivytech.edu/admissions/",
        link: "Applying to Ivy Tech"
    },
    {
        pattern: "what are the tuition and fees",
        reply: "Tuition and fees vary by program and residency status. Detailed information is available on Ivy Tech's tuition page.",
        url: "https://www.ivytech.edu/tuition-aid/tuition-fees/",
        link: "Tuition and Fees"
    },
    {
        pattern: "what financial aid options are available",
        reply: "Ivy Tech offers various financial aid options including grants, scholarships, and loans.",
        url: "https://www.ivytech.edu/financial-aid/",
        link: "Financial Aid"
    },
    {
        pattern: "how do I access my student portal (MyIvy)",
        reply: "You can access your student portal by logging into MyIvy on the Ivy Tech website.",
        url: "https://www.ivytech.edu/myivy/",
        link: "Student Portal"
    },
    {
        pattern: "what is the process for registering for classes",
        reply: "You can register for classes through the Ivy Tech class search and schedule builder.",
        url: "https://www.ivytech.edu/classes/how-to-register-for-classes/",
        link: "Registration 101"
    },
    {
        pattern: "how do I get my transcripts",
        reply: "Transcripts can be requested through the Registrar's office.",
        url: "https://ivytech.edusupportcenter.com/shp/ivytech/viewarticles?articleId=1510845",
        link: "Registrar/Transcripts"
    },
    {
        pattern: "what student services are available",
        reply: "Ivy Tech offers various student services including career coaching, academic advising, and library resources.",
        url: "https://www.ivytech.edu/student-services/",
        link: "Student Services"
    },
    {
        pattern: "how do I find my advisor",
        reply: "You can find your advisor by visiting the advising page on the Ivy Tech website.",
        url: "https://www.ivytech.edu/advising/",
        link: "Advising"
    },
    {
        pattern: "what is the bookstore's location and hours",
        reply: "The bookstore's location and hours can be found on the Ivy Tech campus stores page.",
        url: "https://www.ivytech.edu/student-services/campus-stores/",
        link: "Campus Stores"
    },
    {
        pattern: "how do I apply for scholarships",
        reply: "You can apply for scholarships through the Ivy Tech scholarships page.",
        url: "https://www.ivytech.edu/scholarships/",
        link: "Scholarships"
    },
    {
        pattern: "what are the deadlines for financial aid applications",
        reply: "Financial aid application deadlines are listed on the important dates page.",
        url: "https://www.ivytech.edu/tuition-aid/",
        link: "Important Dates"
    },
    {
        pattern: "how do I check my academic standing",
        reply: "You can check your academic standing through the academic progress page.",
        url: "https://www.ivytech.edu/tuition-aid/financial-aid/satisfactory-academic-progress-sap/",
        link: "Academic Success"
    },
    {
        pattern: "what are the library resources and services",
        reply: "Ivy Tech's library resources and services can be accessed through the libraries page.",
        url: "https://www.ivytech.edu/student-services/libraries/",
        link: "Libraries"
    },
    {
        pattern: "how do I get involved in clubs and organizations",
        reply: "You can get involved in clubs and organizations through the student life page.",
        url: "https://www.ivytech.edu/student-life/",
        link: "Student Life"
    },
    {
        pattern: "what is the process for dual credit enrollment",
        reply: "Information on dual credit enrollment can be found on the dual credit enrollment page.",
        url: "https://www.ivytech.edu/programs/special-programs-for-students/high-school-programs/dual-credit/",
        link: "Dual Credit Enrollment"
    },
    {
        pattern: "how do I access online courses (IvyOnline)",
        reply: "You can access online courses through the IvyOnline page.",
        url: "https://www.ivytech.edu/ivyonline/",
        link: "IvyOnline"
    },
    {
        pattern: "what are the parking options on campus",
        reply: "Parking options on campus are detailed on the campus stores page.",
        url: "https://www.ivytech.edu/locations/indianapolis/maps-and-tour/",
        link: "Campus Stores"
    },
    {
        pattern: "how do I get information about campus events",
        reply: "You can find information about campus events on the events page.",
        url: "https://ivylife.ivytech.edu/events",
        link: "Events"
    },
    {
        pattern: "what support is available for online students",
        reply: "Support for online students is available through the online support page.",
        url: "https://www.ivytech.edu/online-support/",
        link: "Online Support"
    }
]

function getLocationIndexFromPrompt(prompt)
{
    console.log('GETTING LOCATION');
    console.log('RECEIVED PROMPT:' + prompt);
    options = {
        scorer: fuzz.token_set_ratio, // Any function that takes two values and returns a score, default: ratio
        processor: choice => choice.title,  // Takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
        limit: 1, // Max number of top results to return, default: no limit / 0.
        cutoff: 40, // Lowest score to return, default: 0
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

        //handle location lookup
        if (results[0][0].type == 'LOOKUP'){
            var index = getLocationIndexFromPrompt(prompt);
            console.log('RETURNED: ' + index);

            if(index > -1)
            {
                response = "<strong>"+ locations[index].title + " Campus:</strong> <br>"
                response += locations[index].address;
                response += `<br><a href='https://www.ivytech.edu/${locations[index].url}' target='_blank'>Campus Page${suffix}`;
            } else {
                response = errorStatements[n];
            }
            
        } else {
            response = results[0][0].reply;
        }        

        //append url data if it exists
        if (results[0][0].url){
            response += `<br><a href='${results[0][0].url}' target='_blank'>${results[0][0].link}${suffix}`;
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