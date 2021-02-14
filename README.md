# remote-switch

Using a Raspberry Pi and a relay module, I built this simple web app to control any device at home.

The web app has two endpoints:

- An index page with a simple button to switch the relay on and off. 
- A /relay.json endpoint that supports two HTTP methods: GET gives the current state of the realy and POST changes the state.

When the index page is loaded, it checks the current state to show the relevant message ("Turn on" or "Turn off") in the button. When the button is pressed, a POST message is sent and the state is changed.

The web app was built with [Sapper](https://sapper.svelte.dev/docs/), a Node framework to built lightweight apps.

I use it to control the heating in my rented house. The boiler didn't have a thermostate so I had to go to the boiler to turn the heating on and off. With the relay connected as a thermostate, I can now control the heating from my phone.

A clear improvement here would be to get a thermometer for the Raspberry so I can set a temperature, but spring is already coming, so I'll wait until next winter.
