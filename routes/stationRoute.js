const express = require("express");
const router = express.Router()
const {findRecomm}= require('../recommend');
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


router.post('/recommend1',(req,res)=>{
    try {
            const { stationName } = req.body;
            // console.log("call recieved request");
            // console.log("Before recommendCall");
            var sta1=stationName.trim().toLowerCase();
            // var sta2='';
            // if(startStation !== '')
            //  sta1 = startStation

            // if(endStation !== '')
            // sta2 = endStation

            const root = req.root;
            // console.log(stationName)
            // console.log(root);
            var {recommendations} = findRecomm(root, sta1);
            var recommendations1=recommendations;
            // recommendations = [];

            // var {recommendations} = findRecomm(root, sta2);
            // console.log("After recommendCall");
            // var recommendations2=recommendations;
            // recommendations = [];


            // console.log(recommendations);
            res.json({recommendations1});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/recommend2',(req,res)=>{
    try {
            const { stationName } = req.body;
            // console.log("call recieved request");
            // console.log("Before recommendCall");
            // var sta1='';
            // var sta2='';
            // if(startStation !== '')
            //  sta1 = startStation

            // if(endStation !== '')
            // sta2 = endStation
            var sta1=stationName.trim().toLowerCase();

            const root = req.root;
            // console.log(stationName)
            // console.log(root);
            var {recommendations} = findRecomm(root, sta1);
            // var recommendations1=recommendations;
            // recommendations = [];

            // var {recommendations} = findRecomm(root, sta2);
            // console.log("After recommendCall");
            var recommendations2=recommendations;
            // recommendations = [];


            // console.log(recommendations);
            res.json({recommendations2});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;