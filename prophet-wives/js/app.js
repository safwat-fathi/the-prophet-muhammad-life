const { createApp } = Vue;

import Wives from "./components/Wives.js";

createApp({
	template: `
		<Wives />
	`,
	components: {
		Wives,
	},
}).mount("#app");
