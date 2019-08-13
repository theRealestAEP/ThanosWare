const nodeABI = require('node-abi')

console.log(nodeABI.getAbi('12.1.0', 'node'))

console.log(nodeABI.getAbi('6.0.2', 'electron'))