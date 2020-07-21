import { formatDate } from '../date-formate';

export function setupMessages(data) {
	const messageList = document.getElementById('userMessages');

	let html = '';
	data.forEach(doc => {
		const message = doc.data();
		message.date = formatDate(message.timestamp);
 		const div = `
			<div class="account-message card-shadow" data-id=${doc.id}>
				<div class="account-message__card-header">
					<div> ${message.date} </div>
					<div> ${message.email} </div>
				</div>
				<div class="account-message__card-title"> 
					<img src='/assets/img/mail-icon.png' alt='Mail' class="icon-sm">
					${message.name}: 
				</div>
				<div class="account-message__card-text"> ${message.text} </div>
				<img src='/assets/img/trash.png' alt='Trash' class="account-message__card-trash icon-sm">
			</div>
		`;
		
		html += div;
	});
	messageList.innerHTML = html
};