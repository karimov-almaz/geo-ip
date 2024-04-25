const { parentPort, workerData } = require('worker_threads');
const { lookup } = require('geoip-lite');

parentPort.postMessage(lookup(workerData));
