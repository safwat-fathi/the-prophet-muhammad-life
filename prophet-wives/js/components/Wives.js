import { formatHijriYear } from "../../../js/utils.js";

const { onMounted, ref } = Vue;

export default {
	name: "Wives",
	template: `
    <div class="wives-container">
        <ul class="timeline">	
            <li v-for="(wife, index) in wives" :class="{'timeline-item': true, 'right': index % 2 === 0, 'left': index % 2 !== 0}" :key="wife.id">
                <div class="timeline-content">
                    <h2 class="text-xl font-bold mb-2">{{ wife.name }}</h2>
                    <p><strong>الصفة:</strong> {{ wife.concubine ? 'جارية' : 'زوجة' }}</p>
                    <p><strong>تاريخ الميلاد:</strong> {{ formatHijriYear(wife.date_of_birth.hijri_year) }} / {{ wife.date_of_birth.gregorian_year }} م</p>
                    <p><strong>العمر عند الزواج:</strong> {{ wife.age_at_marriage }} سنة</p>
                    <p><strong>تاريخ الوفاة:</strong> {{ formatHijriYear(wife.date_of_death.hijri_year) }} / {{ wife.date_of_death.gregorian_year }} م</p>
                    <p class="mb-2"><strong>الوصف:</strong> {{ wife.description }}</p>
                    
                    <div v-if="wife.children.length">
                        <p><strong>الأبناء:</strong></p>
                        <ul class="flex flex-col gap-1">
													<li v-for="child in wife.children" :key="child.id">
															&bull; {{ child.name }} - {{ child.direct_relation ? 'مباشر' : 'ربيب' }} <br/> ميلاد {{ formatHijriYear(child.date_of_birth.hijri_year) }} / {{ child.date_of_birth.gregorian_year }} م <br/> وفاة {{ formatHijriYear(child.date_of_death.hijri_year) }} / {{ child.date_of_death.gregorian_year }} م
													</li>
                        </ul>
                    </div>
                    
                    <div v-if="wife.resources.length">
                        <p><strong>مصادر:</strong></p>
                        <ul>
													<li v-for="(resource, rIndex) in wife.resources" :key="rIndex">
														<a :href="resource" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
																{{ resource }}
																<span aria-hidden="true">
																		<i class="fa fa-external-link" style="font-size:14px;"></i>
																</span>
														</a>
													</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
`,
	setup() {
		const wives = ref([]);

		// const formatHijriYear = year => {
		// 	if (year < 0) {
		// 		return `${Math.abs(year)} قبل الهجرة`;
		// 	} else {
		// 		return `${year} هـ`;
		// 	}
		// };

		const fetchWives = async () => {
			try {
				const response = await fetch("../_data/data.json");
				const data = await response.json();

				wives.value = data.wives;
			} catch (error) {
				console.error(error);
			}
		};

		onMounted(() => {
			fetchWives();
		});

		return {
			wives,
			formatHijriYear,
		};
	},
};
