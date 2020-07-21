export function loginUser(auth) {
	const loginForm = document.querySelector('#form-login');
	loginForm.addEventListener('submit', (event) => {
    	event.preventDefault();
    	const email = loginForm['login-email'].value;
    	const password = loginForm['login-password'].value;
		auth.signInWithEmailAndPassword(email, password)
    	.then((cred) => {
        	window.location.hash="close";
        	loginForm.reset();
        	loginForm.querySelector('.form-error').innerHTML = '';
    	}).catch(err => {
        	loginForm.querySelector('.form-error').innerHTML = err.message;
    	});
	});
};