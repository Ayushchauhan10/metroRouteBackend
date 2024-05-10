// function bfs(adj, start, end) {
//     const q = []; // Queue for BFS traversal
//     const visited = new Set(); // Set to keep track of visited nodes
//     const parent = {}; // Object to store parent node for each visited node
//     const distance = {}; // Object to store distance from start node

//     visited.add(start);
//     distance[start] = 0;
//     q.push(start);
// //   console.log("Inside BFS traversal")
//     const paths = []; // Array to store all possible paths

//     while (q.length > 0) {
//         const node = q.shift();
//         // console.log("Insie while loop")
//         // console.log(adj['Uttam Nagar West'])

//         for (const neighborObj of adj[node]) {
//             // console.log("insie last")
//             const neighbor = neighborObj.station;
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 parent[neighbor] = node;
//                 distance[neighbor] = distance[node] + 1;
//                 q.push(neighbor);

//                 // If the end node is reached, construct the path
//                 if (neighbor === end) {
//                     let currentNode = end;
//                     const path = [end];
//                     while (currentNode !== start) {
//                         currentNode = parent[currentNode];
//                         path.unshift(currentNode);
//                     }
//                     paths.push({ path, distance: distance[neighbor] });
//                 }
//             }
//         }
//     }

//     return paths;
// }
function findShortestPath(adj, start, end) {
    console.log("Inside findShortestPath 2")
    // const paths = bfs(adj, start, end);
    

   const shortestPath = ["Bfs1","bfs2"];
    

    return shortestPath;
}


module.exports = { findShortestPath };
