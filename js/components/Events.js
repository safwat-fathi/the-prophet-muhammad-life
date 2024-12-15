export default {
	name: "Events",
	template: `
		<ul class="timeline">
			<li v-for="(event, index) in events" :class="{'timeline-item': true, 'right': index % 2 === 0, 'left': index % 2 !== 0}" :key="event.id">
				<div class="timeline-content">
					<h2>{{event.title}}</h2>
					<p>
						{{event.description}}
					</p>
				</div>
			</li>
		</ul>
	`,
	props: {
		events: {
			type: Array,
			default: () => [],
			validator: events => {
				return events.every(event => {
					return event.title && event.description;
				});
			},
			required: true,
		},
	},
	setup() {
		return {
			events: [
				{
					id: 1,
					title: "Event One",
					description:
						"This is the first event in the timeline. The content box is aligned to the left side for variety.",
				},
				{
					id: 2,
					title: "Event Two",
					description:
						"This is the second event in the timeline. The content box is aligned to the right side for variety.",
				},
				{
					id: 3,
					title: "Event Three",
					description:
						"Another event aligned to the left. You could showcase a date, a milestone, or any key point in a chronological order.",
				},
				{
					id: 4,
					title: "Event Four",
					description:
						"Final event as an example. Add as many timeline items as you need.",
				},
			],
		};
	},
};
