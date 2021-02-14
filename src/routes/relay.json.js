const Gpio = require('onoff').Gpio; // Gpio class
const relay = new Gpio(4, 'out'); // Export GPIO17 as an output

// POST: Switch state of the relay
export function post(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    relay.writeSync(1- relay.readSync());
    res.end(JSON.stringify({ state: relay.readSync() }));
} 

// GET: Get current state of the relay
export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ state: relay.readSync()}));
} 