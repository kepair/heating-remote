const Gpio = require('onoff').Gpio; // Gpio class
const led = new Gpio(17, 'out'); // Export GPIO17 as an output
var state = false;

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Switching")
    if (state == false) {
        state = true;
        led.writeSync(1);
        led.unexport();
        res.end({ state });
    } else {
        state = false;
        led.writeSync(0);
        led.unexport();
        res.end({ state });
    }
}