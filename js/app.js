const { createApp } = Vue;

import Events from "./components/Events.js";
import EventItem from "./components/EventItem.js";


createApp({
	template: `
		<Events :events="events" />
	`,
	components: {
		Events,
		EventItem,
	},
	// setup() {
	// 	console.log("main setup");
	// },
}).mount("#app");
