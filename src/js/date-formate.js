export function formatDate(timestamp) {
	let time = timestamp;
	let date = time.toDate();
	let shortDate = date.toDateString();
	return shortDate;
};
