export function sendMessage(db, firebase) {
	const form = document.getElementById('form-contact');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitFormHandler(db, firebase);  
    });

    function submitFormHandler(db, firebase) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        const submitBtn = form.querySelector('#form-submit');
        const modalMessageText = document.getElementById('modalMessageText');
        
        submitBtn.disabled = true;
        modalMessageText.innerHTML = "";

        db.collection('messages').add({
            name: name.value.trim(),
            email: email.value.trim(),
            text: message.value.trim(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then( () => {
            modalMessageText.innerHTML = "Thanks for your message! We will answer you soon!";
            openModal();
            name.value = '';
            email.value = '';
            message.value = '';
            submitBtn.disabled = false;
        }).catch(err => {
            modalMessageText.innerHTML = "Something went wrong! Please try again later";
            openModal();
            name.value = '';
            email.value = '';
            message.value = '';
            submitBtn.disabled = false;
        });
    };

    function openModal() {
        const modal = document.getElementById('modalMessage');
        const closeBtn = document.getElementsByClassName('modal-content__close')[0];
        modal.style.display = "block";
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
        
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            };
        };
    };
};