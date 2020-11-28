<head>
<title>
Boiler
</title>
</head>

<h2>The boiler is:</h2>
<h1>{state}</h1>
<br>
<button id="btn" class="{btnclass}" on:click={switchLight}>Turn {nextState}</button>
<i class="button-on"></i>
<style>

.button-off {
  background-color: var(--white) !important;
  color: var(--strike-red) !important
}

.button-on {
  background-color: var(--main) !important;
  color: var(--white) !important
}

</style>


<script>

	async function checkState(){
		const res = await fetch(`/check.json`);
		const data = await res.json();
		console.log(data.state)
		return data.state;
	}
	let state = "Off";
	let nextState = "On"
	let image = "/cold.png";
	document.body.style.backgroundColor = "var(--main)";
	document.body.style.color = "var(--white)";
	let btnclass = "button-off"



	async function switchLight() {
		console.log("calling switch")
		const res = await fetch(`/switch.json`);
		const data = await res.json();

		if (res.status === 200) {
			console.log("called successfully");
			console.log(data)
			if(data.state == true){
				state = "Off";
				nextState = "On";
				document.body.style.backgroundColor = "var(--main)";
				document.body.style.color = "var(--white)";
				btnclass = "button-off"

			}
			else{
				state = "On";
				nextState = "Off";
				document.body.style.backgroundColor = "var(--strike-red)";
				document.body.style.color = "var(--black)";
				btnclass = "button-on"
			}
			return { data };
		} else {
			console.log("called error");
			this.error(res.status, data.message);
		}
	}

</script>
