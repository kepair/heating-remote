const Gpio = require('onoff').Gpio; // Gpio class
const led = new Gpio(4, 'out'); // Export GPIO17 as an output
var state = false;

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Switching")
    console.log(state)
    if (state == false) {
        state = true;
        console.log("Switching to: " + state)
        led.writeSync(1);
        res.end(JSON.stringify({ state }));
    } else {
        state = false;
        console.log("Switching to: " + state)
        led.writeSync(0);
        res.end(JSON.stringify({ state }));
    }
}