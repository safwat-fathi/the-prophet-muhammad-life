const { ref } = Vue;

export default {
	name: "EventItem",
	template: `
		<li class="timeline-item right">
			<div class="timeline-content">
				<h2>{{event.title}}</h2>
				<p>
					{{event.description}}
				</p>
			</div>
		</li>
	`,
	props: [
		{
			event: {
				type: Object,
				default: () => {},
				validator: event => {
					return event.title && event.description;
				},
				required: true,
			},
		},
	],
	setup(props) {
		console.log(props.event);

		return {
			event: ref(props.event),
		};
	},
};
