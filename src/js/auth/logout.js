export function logoutUser(auth) {
	const logout = document.querySelector('#logout');
	logout.addEventListener('click', (event) => {
    	event.preventDefault();
    	auth.signOut()
    	.then(() => {
        	if(document.title === 'LevelUp - Account') {
            	window.location = '/';
        	};
    	});
	});
};