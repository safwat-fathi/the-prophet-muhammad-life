const { createApp } = Vue;

import Events from "./components/Events.js";

createApp({
	template: `
		<Events />
		<footer class="text-center my-3">
			<p>في حالة وجود خطأ ، يرجى التواصل من خلال  <strong><a href="mailto:safwat.rashwan@gmail.com">البريد الألكتروني</a></strong></p>
		</footer>
	`,
	components: {
		Events,
	},
}).mount("#app");
