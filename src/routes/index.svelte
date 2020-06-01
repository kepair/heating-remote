<head>
<title>
Live Space-Camera 2000
</title>
</head>

<img src="/title.png" alt="LIVE SPACE-CAMERA 2000">

<p>Is the year 2000, we achieved instant transmission of infinite information thanks to the rare Elerium-115 found on the dark side of the Moon.</p>
<img src="/cmlogo.gif" alt="earth link">
<p><img src="/6kb.gif" alt="earth spinning"> A window to the future:<img  src="/6kb.gif" alt="earth spinning"></p>
<iframe title="space camera 2000" width="960px" height="540px" src="http://192.168.1.61">PONG</iframe>
<br>
<br>
<button on:click={switchLight}>Switch light</button>

<style>
button{
	border-radius: 8px;
	padding: 10px;
	font-size: 150%;
	background-color: darkslategray;
	color: aquamarine;
}
</style>

<script>
	async function switchLight() {
		console.log("calling switch")
		const res = await fetch(`http://192.168.1.61:3000/switch.json`);
		const data = await res.json();

		if (res.status === 200) {
			console.log("called successfully");
			return { data };
		} else {
			console.log("called error");
			this.error(res.status, data.message);
		}
	}
</script>