<head>
<title>
Live Space-Camera 2000
</title>
</head>

<img src="/title.png" width="100%" alt="LIVE SPACE-CAMERA 2000">

<p>Is the year 2000, we achieved instant transmission of infinite information thanks to the rare Elerium-115 found on the dark side of the Moon.</p>
<img src="/cmlogo.gif" alt="earth link">
<p><img src="/6kb.gif" alt="earth spinning"> A window to the future:<img  src="/6kb.gif" alt="earth spinning"></p>


  <iframe title="space camera 2000"  src="https://c4hs7a56.kepair.eu">PONG</iframe>

<br>
<br>
<button  data-goatcounter-click="light!" on:click={switchLight}>Switch light</button>

<style>
iframe{
	max-width: 960px;
	width: 100%;
	max-height: 550px;
	height: 550px;
}
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
		const res = await fetch(`https://cam.kepair.eu/switch.json`);
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