$(document).ready(function(){
    $('.cotalog__list-btn1').click(function(){
        $('.cotalog__list-btn2, .cotalog__item2').removeClass('show');
        $('.cotalog__list-btn1, .cotalog__item1').addClass('show');
    });
    $('.cotalog__list-btn2').click(function(){
        $('.cotalog__list-btn1, .cotalog__item1').removeClass('show');
        $('.cotalog__list-btn2, .cotalog__item2').addClass('show');
    });
    $('.read__all').click(function(){
        $('.read__all, .news__item-text').toggleClass('all')
    })
    $('.header__burger').click(function(){
        $('nav, .header__burger').toggleClass('active')
        $('body').toggleClass('lock')
    })
});
          