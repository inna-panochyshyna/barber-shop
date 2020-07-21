export function accountNavigation() {
    const btnToUsers = document.getElementById('toUsers');
    const btnToMessages = document.getElementById('toMessages');
    const btnToBooking = document.getElementById('toBooking');
    
    function hideNavigationContent() {
        const accountContent = document.getElementsByClassName('account-info__content');
        let i = 0;
        for (i = 0; i < accountContent.length; i++) {
            accountContent[i].style.display = "none";
        };
    };

    function removeClassActive() {
        const navigationButtons = document.getElementsByClassName('account-profile__navigation-btn');
        let i = 0;
        for (i = 0; i < navigationButtons.length; i++) {
            navigationButtons[i].className = navigationButtons[i].className.replace(" active", "");
        };
    };

    function openNavigationContent(event) {
        let sectionName = '';
        hideNavigationContent();
        removeClassActive();
        sectionName = 'account' + event.currentTarget.innerHTML;
        document.getElementById(sectionName).style.display = "block";
        event.currentTarget.className += " active";
    };
    
    btnToUsers.addEventListener('click', (event) => openNavigationContent(event));
    btnToMessages.addEventListener('click', (event) => openNavigationContent(event));
    btnToBooking.addEventListener('click', (event) => openNavigationContent(event));
};