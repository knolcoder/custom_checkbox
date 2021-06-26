/*================
 Template Name: Noa - Css3 Creative Hover Button Stylese
 Description: Noa - Css3 Creative Hover Button Stylese
 Version: 1.0
 Author: https://themeforest.net/user/epic_theme
=======================*/

// TABLE OF CONTENTS
// 1. preloader
// 2. back to top


jQuery(function ($) {

    'use strict';

    // 1. preloader
    var preloaderWrap = $('.preloader-wrap'),
        loaderInner = $('.preloader-wrap .preloader-inner');

    $( window ).ready( function(){
        loaderInner.fadeOut(); 
        preloaderWrap.delay(350).fadeOut('slow');
    });

    // 2. back to top
    $(function(){
        // scroll event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });  
        // click event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

}); // JQuery end
