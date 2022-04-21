function mostrarMenu() {
    if (document.getElementsByTagName("ul").style.display == 'none') {
        document.getElementsByTagName("ul").style.display= 'flex'; 
    } else {
        document.getElementsByTagName("ul").style.display= 'none';
    }
}