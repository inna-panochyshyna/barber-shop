export function deleteMessage(db) {
	const usersMessage = document.getElementById('userMessages');
    const deleteMessageResponse = document.getElementById('deleteMessageResponse');

    usersMessage.addEventListener('click', (event) => {
        if(event.target.tagName != 'IMG') {
            return;
        }
        deleteMessage(event);        
    });

    function deleteMessage(event) {
        event.stopPropagation();
        let id = event.target.parentElement.getAttribute('data-id');
        db.collection('messages').doc(id).delete();
    };
};