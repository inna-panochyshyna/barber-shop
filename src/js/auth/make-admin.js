export function makeAdmin(functions) {
const adminForm = document.getElementById('makeAdmin');
    const adminMakeResponse = document.getElementById('makeAdminResponse');
    let response = "";
    adminForm.addEventListener('submit', (event) => {
        adminMakeResponse.innerHTML = '';
        event.preventDefault();
        const adminEmail = document.querySelector('#admin-email').value;
        const addAdminRole = functions.httpsCallable('addAdminRole');
        addAdminRole({ email: adminEmail }).then(result => {
            adminForm.reset();
            if(result.data.message) {
                response = result.data.message;
            } else if(result.data.error) {
                response = result.data.error;
            } else {
                response = result.data.errorInfo.message;
            }
            adminMakeResponse.innerHTML = response;
        });
    });
}