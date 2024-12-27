const { createApp } = Vue;

import Events from "./components/Events.js";

createApp({
	template: `
		<Events />
	`,
	components: {
		Events,
	},
}).mount("#app");
