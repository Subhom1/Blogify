$(document).ready(function () {

    // $('#topheader .navbar-nav a').on('click', function () {
    //     $('#topheader .navbar-nav .nav-item').find('a.active').removeClass('active');
    //     $(this).parent('a').addClass('active');
    // });

    /* Scroll on buttons */
    $('.js--scroll-to-getstarted').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-getstarted').offset().top }, 1000);
    });



});