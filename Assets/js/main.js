//Navbar
document.addEventListener('DOMContentLoaded', () => {
    //get all navbar burg elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    //see if there ARE any nav burgs
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classlist.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        })
    };
});