$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__burger-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.header__burger-menu__list__item__link').click(function(event) {
        $('.header__burger, .header__burger-menu').toggleClass('active');
    });
});