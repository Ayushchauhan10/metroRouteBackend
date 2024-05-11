const express = require("express");
const router = express.Router()

const {findFastestPath}=require('../fastestPath');

// console.log("Hello from station route");



router.post('/',(req,res)=>{
    try {
            const { startStation, endStation } = req.body;
            // console.log("call recieved request");

            // console.log(startStation,endStation);
            // var  startStation="Majlis Park";
            // var endStation="Dwarka Mor";
            // console.log("reqBody",req);
            // console.log("stationname",startStation,endStation);
            
            // console.log("Adj list",adjacencyList);
            // console.log("Before FastPathCall");

            const adjacencyList = req.adjacencyList;
            const stations = req.stations;
            var {finalPath,totalTime,interChanges} = findFastestPath(adjacencyList, startStation, endStation,stations);
            // console.log("After FastPathCall");

            // console.log(fastestPath);
            // fastestPath = ["ayush"];
            res.json({finalPath,totalTime,interChanges});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// console.log("Hello from station route 2");


module.exports = router;