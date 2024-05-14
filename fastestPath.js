class PriorityQueue {
    constructor() {
      this.collection = [];
    }
    enqueue(element) {
      if (this.isEmpty()) {
        this.collection.push(element);
      } else {
        let added = false;
        for (let i = 1; i <= this.collection.length; i++) {
          if (element[1] < this.collection[i - 1][1]) {
            this.collection.splice(i - 1, 0, element);
            added = true;
            break;
          }
        }
        if (!added) {
          this.collection.push(element);
        }
      }
    };
     dequeue() {
      let value = this.collection.shift();
      return value;
    };

    isEmpty() {
      return (this.collection.length === 0)
    };
  }



function findFastestPath(adj, start, end,stations) {
    // console.log("Inside findfastestPath 2",adj["kashmere gate"],start,end);
    // console.log("findFastestPath start");

    var fastestPath = [end];
    let pq = new PriorityQueue();
    
    var validStart =0, validEnd =0 ;
    let times = {};
    let backtrace = {};
    times[start] = 0;
    stations.forEach(node => {
        if(node==start) {
          validStart=1
        }
        if(node==end) {
          validEnd =1
        }
        if (node !== start) {
          times[node] = Infinity
        }
      });

      
      if(validStart == 0 && validEnd ==0)
            return {
            "message":"Enter valid Start and End Station"
        };
        else if(validStart == 0){
            return {"message":"Enter valid Start Station"};
        }
        else if(validEnd == 0){
            return {"message":"Enter valid Start Station"};
        }

pq.enqueue([start, 0]);


// console.log("Before whileLoop");
// console.log(adj['shastri park']);
// adj['shastri park'].forEach(neighbor => {
    // console.log(neighbor.station, neighbor.time, neighbor.line);
// });


    while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        let currentNode = shortestStep[0];
        //   console.log(currentNode);

        adj[currentNode].forEach(neighbor => {
          let time = times[currentNode] + neighbor.time;

          if (currentNode != start) {
            //    console.log(adj['east azad nagar']);
            if (getline(currentNode, neighbor.station,adj) != getline(currentNode, backtrace[currentNode],adj)) {
                
              if (currentNode == 'Yamuna Bank' && neighbor.station == 'Indraprastha' && backtrace[currentNode] == 'Laxmi Nagar') {
                time = time + 0;
              }
              else if (currentNode == 'Yamuna Bank' && neighbor.station == 'Laxmi Nagar' && backtrace[currentNode] == 'Indraprastha') {
                time = time + 0;
              }
              else if (currentNode == 'Ashok Park Main' && neighbor.station == 'Punjabi Bagh' && backtrace[currentNode] == 'Satguru Ram Singh Marg') {
                time = time + 0;
              }
              else if (currentNode == 'Ashok Park Main' && neighbor.station == 'Satguru Ram Singh Marg' && backtrace[currentNode] == 'Punjabi Bagh') {
                time = time + 0;
              }
              else
                time = time + 9;
            }
          }
  
          if (time < times[neighbor.station]) {
            times[neighbor.station] = time;
            backtrace[neighbor.station] = currentNode;
            pq.enqueue([neighbor.station, time]);
          }
        });
    }
    
    // console.log("After whileLoop");
    // console.log(adj['east azad nagar']);
    let lastStep = end;
    var totalTime=times[end];
    while (lastStep !== start) {
        fastestPath.unshift(backtrace[lastStep]);
        lastStep = backtrace[lastStep];
    }

    finalPath=[];
    interChanges=[];
    var color2=getline(fastestPath[0],fastestPath[1],adj)+'Color';
    finalPath.push({ "station":fastestPath[0],
                              "color1":null,
                              "color2":color2,
                            });

    for(var i=1;i<fastestPath.length;i++) {
          //  console.log(getline('majlis park','azadpur',adj))
          //  console.log(adj['majlis park']);
           var color1=getline(fastestPath[i-1],fastestPath[i],adj)+'Color';
           var color2=null;

           if(i+1<fastestPath.length){
            color2=getline(fastestPath[i],fastestPath[i+1],adj);
           }

           if(color2)
           color2=color2+'Color';
           
          //  if(i==1)
          //  {
          //          finalPath.push({ "edge":[fastestPath[0],fastestPath[1]],
          //                     "color1":color1,
          //                     "color2":color2,
          //                   });
          //  }
          //  else 
          //  if(color1 !==color2){

                       finalPath.push({ "station":fastestPath[i],
                                        "color1":color1,
                                        "color2":color2,
                                      });

                       if(color1 && color2 && color1!==color2){
                        interChanges.push(fastestPath[i]);
                       }               
            // }
            // else{
            //       finalPath.push({ "edge":[fastestPath[i-1],fastestPath[i]],
            //         "color1":color1,
            //         "color2":color2,
            //       });

            //   }

              // if(i==fastestPath.length-1)
              // {
              //   finalPath.push({ "edge":[fastestPath[i],fastestPath[i]],
              //       "color1":color1,
              //       "color2":color2,
              //     });

              // }
           
          
      
            
    }
    // console.log(finalPath);

    // console.log(adj['mayur vihar extension']);
    return {finalPath,totalTime,interChanges};


}
            


function getline(sta1, sta2, adj) {
    // console.log(sta1,sta2);
    // console.log("Inside getlIne",adj[sta1]);
    for (var i = 0; i < adj[sta1].length; i++) {

        if (adj[sta1][i].station == sta2){
          return (adj[sta1][i].line);
        }
      }
    
    for (var i = 0; i < adj[sta2].length; i++) {
        if (adj[sta2][i].station == sta1){
          return (adj[sta2][i].line);
        }
      }

    return null; 
}





module.exports = { findFastestPath };



