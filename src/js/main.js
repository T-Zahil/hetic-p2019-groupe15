/* * * *
* SCROLLIFY FUNCTION
* * * */
$(function scrollify() {
    $.scrollify({
        section: ".section",
        sectionName: "wrapper",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });
});

/* * * *
* TYPED TEXT FUNCTION
* * * */
$(function() {
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
$(document).ready(function() {

    $(".menu__burgerOpen").click(function() {
        $(".overlay").fadeToggle(0);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        $('.overlay').addClass('overlay--open');

        setTimeout(function(){
         $('.wrap-nav').addClass('wrap-nav--open');
     }, 400);

    });

});

$('.overlay').on('click', function() {

    $(".overlay").fadeToggle(0);
    $('.wrap-nav').removeClass('wrap-nav--open');
    $('.overlay').removeClass('overlay--open');
    $(".menu__burgerOpen").toggleClass('btn-open').toggleClass('btn-close');

});

/* * * *
* FUNCTION DISPLAY ABOUT BLOCK
* * * */
$(document).ready(function() {

    $(".home__about").click(function() {

        $(".about").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });


});

$('.about').on('click', function() {

    $(".about").fadeToggle(200);
    $(".home__about").toggleClass('btn-open').toggleClass('btn-close');

});

/* * * *
* LAZY LOAD
* * * */
$(function() {

    $('.month__backPicture').Lazy();
    $('.stats__months').Lazy();

});

/* * * *
* SHARE FUNCTIONS
* * * */
function fbShare() {
    window.open("http://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"&t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;
};

function twitterShare() { 
    var u = location.href;
    var t= "Check out this movie ! #flike via @flikeandshare"; 
    window.open('http://twitter.com/share?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'twitsharer','toolbar=0,status=0,width=626,height=436'); 
    return false;    
};