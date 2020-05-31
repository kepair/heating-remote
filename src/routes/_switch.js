const Gpio = require('onoff').Gpio; // Gpio class
const led = new Gpio(17, 'out'); // Export GPIO17 as an output
state = false;

function switchLight() {
    // Toggle the state of the LED connected to GPIO17 every 200ms
    if (state == false) {
        state = true;
        led.writeSync(1);
        return
    } else {
        state = false;
        led.writeSync(0);
        return
    }
};

export default switchLight();