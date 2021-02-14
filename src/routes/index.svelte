<head>
<title>
Boiler
</title>
</head>

<br>
<br>
<button id="btn" class="{show.class}" on:click={switchLight}>Turn {show.nextState}</button>

<!-- Script that is executed server-side before sending the page to the client-->
<script context="module">

	export async function preload(page, session) {

		const res = await this.fetch(`/relay.json`);
		const data = await res.json();
		const state = data.state;
		return { state };
	}
</script>

<!-- Script executed when pressing the button-->
<script>
	import { onMount } from 'svelte';
	const states = [
		{
			state: "On",
			nextState: "Off",
			class: "on",
			image: "url(/warm.gif)"
		},
		{
			state: "Off",
			nextState: "On",
			class: "off",
			image: "url(/snow.gif)"
		}
	]
	export let state;
	let show = states[state];
	onMount(() => {
		document.body.style.backgroundImage = show.image
  	});

	async function switchLight() {
		const res = await fetch('/relay.json', {method: 'POST'});
		const data = await res.json();

		if (res.status === 200) {
			show = states[data.state];
			document.body.style.backgroundImage = show.image
		} else {
			console.log("called error");
			this.error(res.status, data.message);
		}
	}
</script>
