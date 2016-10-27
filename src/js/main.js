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
                        typeSpeed: 80,
                        // time before typing starts
                        startDelay: 800,
                        // show cursor
                        showCursor: false,
                    });
});