<head>
<title>
Live Space-Camera 2000
</title>
</head>

<h1>The boiler is:</h1>

<h2>{state}</h2>

<br>
<br>


<button class="button" on:click={switchLight}>Turn {nextState}</button>

<style>
.button {
  transition-duration: 0.4s;
  font-size: large;
}

.button:hover {
  background-color: black; /* Green */
  color: white;
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
				image = "/cold.png";}
			else{
				state = "On";
				nextState = "Off";
				image = "/burning.png"}
			return { data };
		} else {
			console.log("called error");
			this.error(res.status, data.message);
		}
	}
	
</script>
