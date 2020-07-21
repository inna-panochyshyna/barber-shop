let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', showMenu);

function showMenu() {
    let menu = document.getElementById('mainMenu');
    if (menu.className === "header") {
        menu.className += " responsive";
    } else {
       menu.className = "header";
    }
};