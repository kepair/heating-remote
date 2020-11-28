/* 
let i = 1;
export function post(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    i = 1 - i;
    res.end(JSON.stringify({ state: i }));
} 

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ state: i}));
}  */


const Gpio = require('onoff').Gpio; // Gpio class
const relay = new Gpio(4, 'out'); // Export GPIO17 as an output

export function post(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    relay.writeSync(1- relay.readSync());
    res.end(JSON.stringify({ state: relay.readSync() }));
} 

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ state: relay.readSync()}));
} 