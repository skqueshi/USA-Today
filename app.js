const header = document.getElementById('header')

$(function(){
    $(window).scroll(function() {
     var top = $(document).scrollTop();
     if (top > 200) $(header).addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класс
     else $(header).removeClass('fixed');
    });
   });