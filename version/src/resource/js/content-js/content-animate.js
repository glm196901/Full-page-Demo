/**
 * Created by mac on 2017/7/2.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
        sectionsColor: ['', '#FFF', '#FFF','#FFF','#FFF','#FFF','#fff'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '关于我们', '新闻资讯', '服务内容', '联系我们', '技术支持', '底部'],
        responsiveWidth: 768,
        resize: false,
//                afterResponsive: function(isResponsive){
//                },
        afterLoad: function(anchorLink, index){
            if(index === 2){
                $('.section2').find('p').animate({
                    left: '0'
                }, 'easeOutExpo');
                $('.turn').hover(()=>{
                        $('.turn').addClass('animated bounce')
                    },
                    ()=>{
                        $('.turn').removeClass('animated bounce')
                    }
                );
                $('#turnleft').addClass('animated slideInLeft');
                $('#turnright').addClass('animated slideInDown');
                $('#turnup').addClass('animated slideInRight');
            }
            if(index === 3){
                $('.section3').find('p').animate({
                    bottom: '0'
                }, 500, 'easeOutExpo');
            }
            if(index === 4){
                $('.section4').find('.services-content-midUp').delay(500).animate({
                    top: '0'
                } , 1000, 'easeOutExpo');
                $('.section4').find('.services-content-left').delay(500).animate({
                    left: '0'
                } , 1000, 'easeOutExpo');

                $('.section4').find('.services-content-midDown').delay(500).animate({
                    bottom: '0'
                } , 1000, 'easeOutExpo');
                $('.section4').find('.services-content-right').delay(500).animate({
                    right: '0'
                }, 1000, 'easeOutExpo');
                $('.bgdata').hover(()=>{
                        $('.bgdata').addClass('animated rotateIn')}
                    , ()=>{
                        $('.bgdata').removeClass('animated rotateIn')
                    }
                );
                $('.cloud').hover(()=>{
                        $('.cloud').addClass('animated rotateIn')}
                    , ()=>{
                        $('.cloud').removeClass('animated rotateIn')
                    }
                );
                $('.ml').hover(()=>{
                        $('.ml').addClass('animated rotateIn')}
                    , ()=>{
                        $('.ml').removeClass('animated rotateIn')
                    }
                );
                $('.deep').hover(()=>{
                        $('.deep').addClass('animated rotateIn')}
                    , ()=>{
                        $('.deep').removeClass('animated rotateIn')
                    }
                );
                $('.datamining').hover(()=>{
                        $('.datamining').addClass('animated rotateIn')}
                    , ()=>{
                        $('.datamining').removeClass('animated rotateIn')
                    }
                );
                $('.view').hover(()=>{
                        $('.view').addClass('animated rotateIn')}
                    , ()=>{
                        $('.view').removeClass('animated rotateIn')
                    }
                );

            }
            if(index === 5){
                $('.section5').find('p').animate({
                    left: '0'
                }, 'easeOutExpo');

            }
        },
        onLeave: function(index, direction){
            if(index === 2){
                $('.section2').find('p').animate({
                    left: '-120%'
                }, 1000, 'easeOutExpo');
            }
            if(index === 3){
                $('.section3').find('p').animate({
                    bottom: '-120%'
                }, 500, 'easeOutExpo');
            }
            if(index === 4){
                $('.section4').find('.services-content-left').animate({
                    left: '-180%'
                }, 1000, 'easeOutExpo');
                $('.section4').find('.services-content-midUp').animate({
                    top: '-80%'
                }, 1000, 'easeOutExpo');
                $('.section4').find('.services-content-midDown').animate({
                    bottom: '-80%'
                }, 1000, 'easeOutExpo');
                $('.section4').find('.services-content-right').animate({
                    right: '-180%'
                }, 1000, 'easeOutExpo');
            }
            if(index === 5){
                $('.section5').find('p').animate({
                    left: '-120%'
                }, 1000, 'easeOutExpo');
            }
        }
    });
    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 768){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();

});