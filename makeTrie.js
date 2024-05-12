class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        if (!word) return; // Ensure word is not null or undefined
        let node = this.root;
        for (let char of word.toLowerCase()) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    findRecommendation(word) {
        let node = this.root;
        const recommendations = [];

        for (let char of word.toLowerCase()) {
            // console.log(typeof node.children);
            if (!node.children[char]) {
                return recommendations; 
            }
            node = node.children[char];
        }

        this._findWords(node, word, recommendations);
        // console.log("parent function",recommendations);
        return recommendations.slice(0,5); 
    }

    _findWords(node, prefix, recommendations) {
        // console.log("inside findWords");
        if (node.isEndOfWord) {
            recommendations.push(prefix);
            // console.log(recommendations);
        }
        for (let char in node.children) {
            this._findWords(node.children[char], prefix + char, recommendations);
        }
    }
}

const root = new Trie();
// search(word) {
//     if (!word) return false; // Ensure word is not null or undefined
//     let node = this.root;
//     for (let char of word.toLowerCase()) {
//         if (!node || !node.children ||!node.children[char]) {
//             return false;
//         }
//         node = node.children[char];
//     }
//     return node.isEndOfWord;
// }

// searchPrefix(word) {
//     if (!word) return false; // Ensure word is not null or undefined
//     let node = this.root;
//     for (let char of word.toLowerCase()) {
//         if (!node || !node.children ||!node.children[char]) {
//             return false;
//         }
//         node = node.children[char];
//     }
//     return true;
// }

function insertStations(stationNames) {
    for (let name of stationNames) {
        root.insert(name);
    }
}

// Define stations for each metro line
const stations = {
    blueLine: require('./stations/blueLine.json'),
    blueBranchedLine: require('./stations/blueBranchedLine.json'),
    magentaLine: require('./stations/magentaLine.json'),
    yellowLine: require('./stations/yellowLine.json'),
    violetLine: require('./stations/violetLine.json'),
    redLine: require('./stations/redLine.json'),
    greenLine: require('./stations/greenLine.json'),
    greenBranchedLine: require('./stations/greenBranchedLine.json'),
    pinkLine: require('./stations/pinkLine.json'),
    orangeLine: require('./stations/orangeLine.json'),
    greyLine: require('./stations/greyLine.json')
};

// Insert stations for each metro line into the trie
for (let line in stations) {
    insertStations(stations[line].map(station => station.name.toLowerCase()));
}

module.exports = root;
