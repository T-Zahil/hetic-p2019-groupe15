/* * * *
* SCROLLIFY FUNCTION
* * * */
$(function scrollify() {
  $.scrollify({
    section : ".section",
    sectionName : "wrapper",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});
});

/* * * *
* TYPED TEXT FUNCTION
* * * */
$(function(){
    $(".home__titleDate").typed({
      strings: ["2016"],
                        // text typed speed
                        typeSpeed: 200,
                        // time before typing starts
                        startDelay: 800,
                        // show cursor
                        showCursor: false,
                    });
});

/* * * *
* FUNCTION DISPLAY MENU BLOCK
* * * */
$(document).ready(function(){
    $(".menu__burgerOpen").click(function(){
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".menu__burgerOpen").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

/* * * *
* FUNCTION DISPLAY ABOUT BLOCK
* * * */
$(document).ready(function(){
    $(".menu__about").click(function(){
        $(".about").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.about').on('click', function(){
    $(".about").fadeToggle(200);   
    $(".menu__about").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

$(function() {
    $('.month__backPicture').Lazy();
    $('.stats__months').Lazy();
});