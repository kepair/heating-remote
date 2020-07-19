<head>
<title>
Live Space-Camera 2000
</title>
</head>

<img src="/window.png" width="90%" alt="LIVE SPACE-CAMERA 2000">


  <iframe title="space camera 2000"  src="https://c4hs7a56.kepair.eu">PONG</iframe>

<br>
<br>
<!--<button on:click={switchLight}>Switch light</button>-->
<!-- weather widget start -->
<a target="_blank" href="https://www.booked.net/weather/barcelona-45"><img src="https://w.bookcdn.com/weather/picture/25_45_1_1_ecf0f1_250_bdc3c7_9da2a6_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=18475" alt="booked.net"/></a>
<!-- weather widget end -->

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