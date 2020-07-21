export function showUserInfo(user) {
	const accountDetails = document.querySelector('#accountDetails');
	if (user) {
		let html = `
                <div class="content-title content-title-sm">${user.name}</div>
                <div class="content-title">${user.email}</div>
                <div class="account-profile__role">${user.admin ? 'Admin' : 'Client'}</div>
                `;
    	accountDetails.innerHTML = html;
	} else {
    	accountDetails.innerHTML = '';
	};

};