import findGreet from './findGreet'

$(document).ready(function(){
    $('.left-menu .menu-level1').click(function(){
        var current =$(this),
            menu = current.closest('.left-menu');
        menu.find('.menu-level1').removeClass('active');
        menu.find('.menu-level2').removeClass('active');
        current.addClass('active');
    });
    $('.left-menu .menu-level2').click(function(){
        var current =$(this),
            menu = current.closest('.left-menu'),
            parent = current.closest('.submenu').closest('.list-item');
        menu.find('.menu-level1').removeClass('active');
        menu.find('.menu-level2').removeClass('active');
        parent.find('.menu-level1').addClass('active');
        current.addClass('active');
    });
});