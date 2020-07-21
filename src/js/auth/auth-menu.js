export function setupAuthMenu(user) {
	const loggedOutLinks = document.querySelectorAll('.logged-out');
	const loggedInLinks = document.querySelectorAll('.logged-in');
	const adminItems = document.querySelectorAll('.account-admin');

	if (user) {
		if (user.admin) {
			adminItems.forEach(item => item.style.display = 'block');
		};
		loggedInLinks.forEach(item => item.style.display = 'block');
		loggedOutLinks.forEach(item => item.style.display = 'none');
	} else {
		loggedInLinks.forEach(item => item.style.display = 'none');
		loggedOutLinks.forEach(item => item.style.display = 'block');
		adminItems.forEach(item => item.style.display = 'none');
	};
};