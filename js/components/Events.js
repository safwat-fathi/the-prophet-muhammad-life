import { formatHijriYear } from "../../js/utils.js";

const { onMounted, ref } = Vue;

export default {
	name: "Events",
	template: `
		<div class="items-container">
			<ul class="timeline">	
				<li v-for="(event, index) in events" :class="{'timeline-item': true, 'right': index % 2 === 0, 'left': index % 2 !== 0}" :key="event.id">
					<div class="timeline-content">
						<h2>{{ event.title }}</h2>
						<p>{{ event.description }}</p>
						<p><strong>الموقع:</strong> {{ event.location }}</p>
						<p><strong>العام الهجري:</strong> {{ formatHijriYear(event.hijri_year) }}</p>
						<p><strong>العام الميلادي:</strong> {{ event.gregorian_year }}</p>
						<p><strong>عدد المسلمين حوالي:</strong> {{ event.number_of_muslims }}</p>
						<div v-if="event.resources.length">
							<p>مصادر:</p>
							<ul>
								<li v-for="(resource, rIndex) in event.resources" :key="rIndex">
									<a :href="resource" target="_blank" rel="noopener noreferrer">{{ resource }} <span aria-hidden="true"><i class="fa fa-external-link" style="font-size:14px"></i></span
			></a>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	`,
	setup() {
		const events = ref([]);

		const fetchEvents = async () => {
			try {
				const response = await fetch("../_data/data.json");
				const data = await response.json();

				events.value = data.events;
			} catch (error) {
				console.error(error);
			}
		};

		onMounted(() => {
			fetchEvents();
		});

		return {
			events,
			formatHijriYear,
		};
	},
};
