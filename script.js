$(document).ready(function(){
    $('menu').click(function(){
        $(this).toggleClass('zmdi-time');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('#login-form form .zmdi-close').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll', function(){
         $(#menu).removeClass('zmdi-time');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');
    });
});