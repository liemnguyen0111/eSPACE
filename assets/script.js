let testObj = []

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

fetch(`https://api.spacexdata.com/v3/launches?limit=1000&offset=0 `)
.then(temp => temp.json())
.then(data => {

    console.log(data[0])
    let info = {
        flightNum : data[0].flight_number,
        missionName : data[0].mission_name,
        flightDetails : data[0].details,
    }
//    setData(data)
    testObj.push(info)
    console.log(testObj)
    
}).catch(error => {console.log(error)})

// testObj = getData() || [1,2,3]

// console.dir(testObj)