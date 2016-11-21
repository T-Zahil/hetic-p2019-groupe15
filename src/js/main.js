

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


/* * * *
* FUNCTION TIMELINE
* * * */



$(function() {
  var wHeight = $( window ).height();
  var scrollTop = $( window ).scrollTop();

  function initBulletNavigation(){
    var $article = $('.page');
    if ( $article.size() > 0 ){
      $('body').append('<div class="bullet-navigation bullet-navigation--sticky"><ul></ul></div>');
      var $navigation = $('.bullet-navigation ul');

      $article.each( function( index ){
        var articleId = $(this).attr('id');
        if (articleId === undefined){
          articleId = 'article_' + index;
          $(this).attr('id',articleId);
        }
        var articleTitle = $(this).find('h1,h2,h3,h4,h5,h6').first().text();
        $navigation.append('<li id="b_'+ articleId +'" title="'+ articleTitle +'"><a href="#' + articleId + '"></a></li>');
      });
    }
  }
  /**
   * BULLET NAVIGATION
   */
  function updateBulletNavigation(){
    var $article = $('.page');
    if ( $article.size() > 0 ){
      var goffset = $article.offset();
      if ( (scrollTop + (wHeight / 2))  >= goffset.top ){
        $('.bullet-navigation').addClass('bullet-navigation--sticky');
        $article.each( function(){
          var offset = $(this).offset();
          if ( (scrollTop + (wHeight / 2)) >= offset.top ){
            var articleId = $(this).attr('id');
            $('.bullet-navigation ul li').removeClass('active');
            $('#b_'+articleId).addClass('active');
          }
        });
      }else{
        $('.bullet-navigation ul li').removeClass('active');
        $('.bullet-navigation').removeClass('bullet-navigation--sticky');
      }
    }
  }

  initBulletNavigation();
  updateBulletNavigation();

  $( window ).scroll(function() {
    scrollTop = $( window ).scrollTop();
    updateBulletNavigation();
  });

});
