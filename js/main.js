$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Если пользователь прокрутил более 100 пикселей вниз
            $('#topNubex').fadeIn();
        } else {
            $('#topNubex').fadeOut();
        }
    });

    // По клику на значок прокрутки наверх
    $('#topNubex').click(function() {
        $('body,html').animate({scrollTop: 0}, 700);
    });
});

document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
});
