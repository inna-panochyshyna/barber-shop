export function setupAccountMenu(user) {
	const adminItems = document.querySelectorAll('.account-admin');

	if (user) {
		if (user.admin) {
			adminItems.forEach(item => item.style.display = 'block');
		};
	} else {
		adminItems.forEach(item => item.style.display = 'none');
	};
};