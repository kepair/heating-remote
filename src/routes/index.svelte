<head>
<title>
Live Space-Camera 2000
</title>
</head>

<h1>Hit the boiler</h1>



<br>
<br>


<button on:click={switchLight}>Turn {state}</button>


<style>
button{
	border-radius: 8px;
	padding: 10px;
	font-size: 150%;
}
</style>

<script>

	async function checkState(){
		const res = await fetch(`/check.json`);
		const data = await res.json();
		console.log(data.state)
		return data.state;
	}
	let state = "On";
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
				image = "/burning.png";}
			else{
				state = "On";
				image = "/cold.png"}
			return { data };
		} else {
			console.log("called error");
			this.error(res.status, data.message);
		}
	}
	
</script>
