export const formatHijriYear = year => {
	if (year < 0) {
		return `${Math.abs(year)} ق.هـ`;
	} else {
		return `${year} هـ`;
	}
};
