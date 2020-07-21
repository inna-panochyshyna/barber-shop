export function registerUser(auth, db, firebase) {
    const registerForm = document.querySelector('#form-register');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = registerForm['register-email'].value;
        const password =  registerForm['register-password'].value;
        auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                return db.collection('users').doc(cred.user.uid).set({
                name: registerForm['register-name'].value,
                email: registerForm['register-email'].value,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                window.location.hash="close";
                registerForm.reset();
                registerForm.querySelector('.form-error').innerHTML = ''
            }).catch(err => {
                registerForm.querySelector('.form-error').innerHTML = err.message;
            });
        });
    });
};