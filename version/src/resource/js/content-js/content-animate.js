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
                        $('.turn').removeClass('bounce')
                    }
                );
                $('#turnleft').addClass('animated slideInLeft');
                $('#turnright').addClass('animated slideInDown');
                $('#turnup').addClass('animated slideInRight');
            }
            if(index === 3){
                $('.section3').find('.p1').animate({
                    bottom: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.p2').animate({
                    left: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.p3').animate({
                    right: '0'
                }, 500, 'easeOutExpo');
            }
            if(index === 4){
                //左动画
                $('.services-content-left').addClass('animated fadeInLeft');
                $('.bgdata').hover(()=>{
                        $('.bgdata').addClass('animated rotateIn')}
                   , ()=>{
                        $('.bgdata').removeClass('animated rotateIn')
                    }
                );
                $('.deep').hover(()=>{
                        $('.deep').addClass('animated rotateIn')}
                    , ()=>{
                        $('.deep').removeClass('animated rotateIn')
                    }
                );

                //上动画
                $('.services-content-midUp').addClass('animated fadeInDown');
                $('.cloud').hover(()=>{
                        $('.cloud').addClass('animated rotateIn')}
                    , ()=>{
                        $('.cloud').removeClass('animated rotateIn')
                    }
                );

                //右动画
                $('.services-content-right').addClass('animated fadeInRight');
                $('.ml').hover(()=>{
                        $('.ml').addClass('animated rotateIn')}
                    , ()=>{
                        $('.ml').removeClass('animated rotateIn')
                    }
                );
                $('.view').hover(()=>{
                        $('.view').addClass('animated rotateIn')}
                    , ()=>{
                        $('.view').removeClass('animated rotateIn')
                    }
                );

                //下动画
                $('.services-content-midDown').addClass('animated fadeInUp');
                $('.datamining').hover(()=>{
                        $('.datamining').addClass('animated rotateIn')}
                    , ()=>{
                        $('.datamining').removeClass('animated rotateIn')
                    }
                );
                //content-header动画
                $('.content-header').addClass('animated rollIn');

            }
            if(index === 6){

                $('.fadein').addClass('animated zoomInUp')
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
                $('.section3').find('p').animate({
                    left: '-120%'
                }, 500, 'easeOutExpo');
                $('.section3').find('p').animate({
                    left: '-120%'
                }, 500, 'easeOutExpo');

            }
            if(index === 4){
                $('.services-content-left').addClass('fadeOutLeft');
                setTimeout(function(){
                    $('.services-content-left').removeClass('fadeOutLeft');
                },1000);
                $('.services-content-midDown').addClass(' fadeOutDown');
                setTimeout(function(){
                    $('.services-content-midDown').removeClass('fadeOutDown');
                },1000);
                $('.services-content-midUp').addClass('fadeOutUp');
                setTimeout(function(){
                    $('.services-content-midUp').removeClass(' fadeOutUp');
                },1000);
                $('.services-content-right').addClass('animated  fadeOutRight');
                setTimeout(function(){
                    $('.services-content-right').removeClass('fadeOutRight');
                },1000);
            }


            if(index=== 6){
                $('.fadein').removeClass('animated zoomInUp')


            }
        }
    });
    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        let $ww = $(window).width();
        if($ww < 768){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();

});