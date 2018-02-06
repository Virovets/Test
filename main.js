window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled > 100) {
        document.querySelector('header').classList.add("sticky");
    } else {
        document.querySelector('header').classList.remove("sticky");
    }
}