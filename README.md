# heating-remote

[More info here](https://pedroir.nz/blog/heating_remote/)

Branch `gif` is the most updated.

This is a basic Node web app that contains a button. Using a Raspberry Pi and a relay, you can control any circuit (on/off). I built this to control the heating in my house by connecting the relay to the boiler (I don't have a thermostate).

The web app was built using the default template of [Sapper](https://sapper.svelte.dev/docs/) template. The main page contains a button that calls the endpoint `/relay.json`. It supports GET and POST requests:

- GET: Answers with the current state of the relay
- POST: Switches the state of the relay.

When loading the main page, a GET request is done to show the right state any time you load the app.
