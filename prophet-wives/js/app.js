const { createApp } = Vue;

import Wives from "./components/Wives.js";

createApp({
	template: `
		<Wives />
		<footer class="text-center my-3">
			<p>في حالة وجود خطأ ، يرجى التواصل من خلال  <strong><a href="mailto:safwat.rashwan@gmail.com">البريد الألكتروني</a></strong></p>
		</footer>
	`,
	components: {
		Wives,
	},
}).mount("#app");
