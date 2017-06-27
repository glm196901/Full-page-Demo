/**
 * Created by mac on 2017/6/20.
 */
jQuery(document).ready(function() {
    "use strict";
    /* ===================================
     PRELOADER
     ====================================== */
    // makes sure the whole site is loaded
    jQuery(window).load(function () {
        // will first fade out the loading animation
        jQuery(".status").delay(500).fadeOut('slow');
        // will fade out the whole DIV that covers the website.
        jQuery(".preloader").delay(1000).fadeOut('slow');
    });
});


/* ===================================
 header轮播系统
 ====================================== */

$(()=>{
    $('.flicker-example').flickerplate(
        {
            auto_flick : true,
            auto_flick_delay : 8,
            flick_animation : 'transform-slide'
        });
});

