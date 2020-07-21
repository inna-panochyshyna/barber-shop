import { formatDate } from '../date-formate';

export function showAllUsers(data) {
	const userData = document.getElementById('usersData');
	let html = '';
	let count = 0;
	const tableHeader = `
		<div class="account-user account-user__header">
				<div class="account-user__count p-all-1"> # </div>
				<div class="account-user__img p-all-1"> Icon </div>
				<div class="account-user__name p-all-1"> Name </div>
				<div class="account-user__email p-all-1"> Email </div>
				<div class="account-user__date p-all-1"> Date of creation </div>
		</div>
	`
	data.forEach(doc => {
		const user = doc.data();
		user.date = formatDate(user.timestamp);
		count++;
 		const div = `
			<div class="account-user" data-id=${doc.id}>
				<div class="account-user__count p-all-1"> ${count} </div>
				<div class="account-user__img"> 
					<img src="/assets/img/account.png" alt="Account icon" class="icon-sm">
				</div>
				<div class="account-user__name p-all-1"> ${user.name} </div>
				<div class="account-user__email p-all-1"> ${user.email} </div>
				<div class="account-user__date p-all-1"> ${user.date} </div>
			</div>
		`;
		
		html += div;
	});

	userData.innerHTML = tableHeader + html;
};