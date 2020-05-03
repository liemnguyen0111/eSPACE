
// let setData = (obj) =>
// {
//      let info = new Object() 
//         info.flightNum = toString(obj[0].flight_number)
//         info.missionName = toString(obj[0].mission_name)
//         info.flightDetails = toString(obj[0].details)

//     // console.log(obj)
//      testObj.push(JSON.stringify(info))
//     // console.dir(testObj)
// }
// // showconsole(testObj)
// // console.log(testObj)
let myKey = `SoaVL6pjWnaF1xPW3l44N2Ai9H81nqrWwCT9rRjc`


/**One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, 
 * this website is one of the most popular websites across all federal agencies. It has the 
 * popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and 
 * associated metadata so that it can be repurposed for other applications. In addition, 
 * if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. 
 * These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery. */
let apod_URL = `https://api.nasa.gov/planetary/apod?api_key=${myKey}`

let neoWs_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${'2015-09-07'}&end_date=${'2015-09-08'}&api_key=${myKey}`

/**Notifications

parameters:
'startDate' and 'endDate' are in format 'yyyy-MM-dd' UT
'type' could be: all, FLR, SEP, CME, IPS, MPC, GST, RBE, report

Note:
'startDate' if left out would default to 7 days prior to the current UT date
'endDate' if left out would default to current UT date
'type' if left out would default to 'all'
The request date range is limit to 30 days. If the request range is greater than 30 days, it would limit your request range to (endDate-30) to endDate. */
let donki_Notification_URL = `https://api.nasa.gov/DONKI/notifications?start_date=${'2015-09-07'}&end_date=${'2015-09-08'}&type=all&api_key=${myKey}`

/**Solar Flare (FLR)

startDate: default to 30 days prior to current UTC date
endDate: default to current UTC date

Example:
https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY */
let donki_FLR_URL = `https://api.nasa.gov/DONKI/FLR?startDate=${'2019-01-01'}&endDate=${'2020-05-01'}&api_key=${myKey}`

/**TechTransfer

NASA's Technology Transfer Program ensures that innovations developed for exploration and discovery are broadly available to the public. 
The NASA patent portfolio is available to benefit US citizens. Through partnerships and licensing agreements with industry, 
these patents ensure that NASA’s investments in pioneering research find secondary uses that benefit the economy, create jobs, and improve quality of life. 
This endpoint provides structured, searchable developer access to NASA’s patents, software, and technology spinoff descriptions that have been curated to 
support technology transfer. More information can be found at technology.nasa.gov and software.nasa.gov and spinoff.nasa.gov.
 */
let tech_Transfer_URL = `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${myKey}` //work

let weather_URL = `https://api.nasa.gov/insight_weather/?api_key=${myKey}&feedtype=json&ver=1.0`


/**
 * The images.nasa.gov API is organized around REST. Our API has predictable, resource­oriented URLs, and uses HTTP response codes to indicate API errors. 
 * We use built­in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off­the­shelf HTTP clients. We support cross­origin resource sharing, 
 * allowing you to interact securely with our API from a client­ side web application. JSON is returned by all API responses, including errors.
Each of the endpoints described below also contains example snippets which use the curl command­line tool, Unix pipelines, and the python command­line tool to output 
API responses in an easy­to­read format. We insert superfluous newlines to improve readability in these inline examples, but to run our examples you must remove these newlines.
API Root: https://images-api.nasa.gov

API Endpoints:
/search 
/asset/{nasa_id} 
/metadata/{nasa_id} 
/captions/{nasa_id} 
/album/{album_name}
 */


fetch(`https://images-api.nasa.gov/search?q=2020`)
.then(temp => temp.json())
.then(data => {

    // data.collection.items.forEach(function(user){
    //     console.log(user.data[0].description
    //         )})
    console.log(data.collection.items)
   
    // console.log(data.collection.items[0])

//     let info = {
//         flightNum : data[0].flight_number,
//         missionName : data[0].mission_name,
//         flightDetails : data[0].details,
//     }
// //    setData(data)
//     testObj.push(info)
//     console.log(testObj)
    
}).catch(error => {console.log(error)})

// testObj = getData() || [1,2,3]

// console.dir(testObj)