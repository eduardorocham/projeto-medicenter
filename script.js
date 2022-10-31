function mostrarMenu() {
    let menu = document.querySelector('.mobile');
    if (menu.classList.contains('display_flex')) {
        menu.classList.remove('display_flex');
    } else {
        menu.classList.add('display_flex');
    }
}

//Slides:

let currentSlide = 0;

function goNext () {
    currentSlide ++;
    if (currentSlide > 2) {
        currentSlide = 0;
    }
    updateMargin();
}

function goPrev () {
    currentSlide--;
    if (currentSlide == 0) {
        currentSlide = 2
    }
    updateMargin();
}

function updateMargin () {
    let newMargin = currentSlide * 100;
    document.querySelector('.slides').style.marginLeft = `-${newMargin}vw`
}

setInterval(goNext, 4000);

//Departaments

function changeShow() {
    let departament = document.querySelectorAll('.departament-body');
    for (let i in departament) {
        if (departament[i].classList.contains('show')) {
            departament[i].classList.remove('show');
        }
    };
}

