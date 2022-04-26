function mostrarMenu() {
    let menu = document.querySelector('.mobile');
    if (menu.classList.contains('display_flex')) {
        menu.classList.remove('display_flex');
    } else {
        menu.classList.add('display_flex');
    }
}