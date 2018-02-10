window.addEventListener('scroll', stickyHeader);
var header = document.querySelector('header');
var headerTop = header.getBoundingClientRect().top + window.pageYOffset;
var flag = true;

function stickyHeader() {

    if (window.pageYOffset < headerTop) {
        header.classList.remove('sticky');
        flag = true;
    } else if (window.pageYOffset > headerTop && flag) {
        header.classList.add('sticky');
        header.style.opacity = 0;
        fade(header, 1000, 50);
        flag = false;
    } else {
        clearInterval(fade);
    }
}

function fade(elem, t, f) {
    var fps = f || 50;
    var time = t || 500;
    var steps = time / fps;
    var op = 0;
    var d0 = 1 / steps;
    var timer = setInterval(function() {
        op += d0;
        header.style.opacity = op;
        steps--;
        if (steps == 0) {
            clearInterval(timer);
        }
    }, (1000 / fps));

};