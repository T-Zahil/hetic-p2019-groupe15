$(document).ready(function(){

    // Add a Waypoint for each month. 
    // Each waypoint will trigger the function animateMonth().
    var january = new Waypoint({
        element: $('.january').find($('.month__back')),
        handler: function(direction) {
            animateMonth('.january');
        },
        offset: 20
    });

    var february = new Waypoint({
        element: $('.february'),
        handler: function(direction) {
            animateMonth('.february');
        },
        offset: 20
    });

    var march = new Waypoint({
        element: $('.march'),
        handler: function(direction) {
            animateMonth('.march');
        },
        offset: 20
    });

    var april = new Waypoint({
        element: $('.april'),
        handler: function(direction) {
            animateMonth('.april');
        },
        offset: 20
    });

    var may = new Waypoint({
        element: $('.may'),
        handler: function(direction) {
            animateMonth('.may');
        },
        offset: 20
    });

    var june = new Waypoint({
        element: $('.june'),
        handler: function(direction) {
            animateMonth('.june');
        },
        offset: 20
    });

    var july = new Waypoint({
        element: $('.july'),
        handler: function(direction) {
            animateMonth('.july');
        },
        offset: 20
    });

    var august = new Waypoint({
        element: $('.august'),
        handler: function(direction) {
            animateMonth('.august');
        },
        offset: 20
    });

    var september = new Waypoint({
        element: $('.september'),
        handler: function(direction) {
            animateMonth('.september');
        },
        offset: 20
    });

    var october = new Waypoint({
        element: $('.october'),
        handler: function(direction) {
            animateMonth('.october');
        },
        offset: 20
    });

    var november = new Waypoint({
        element: $('.november'),
        handler: function(direction) {
            animateMonth('.november');
        },
        offset: 20
    });

    var december = new Waypoint({
        element: $('.december'),
        handler: function(direction) {
            animateMonth('.december');
        },
        offset: 20
    });

});

// This function will do the animation corresponding to the month on the screen
function animateMonth(name) {
    //Month img animation
    setTimeout(function(){
        $(name).find(".month__backPicture").addClass('month__backPicture--active');
    }, 500);

    // Month content animation
    setTimeout(function(){
        $(name).find('.month__infos').css({
            'transform': 'translateX(0)',
        });
    }, 1000);

    // Stats animation
    $(name).find($(".answer__leftText, .answer__rightText")).click(function(){
        $(name).find($('.backSurvey__question')).addClass('backSurvey__question--after');
        $(name).find($('.answer__leftFigure')).addClass('answer__leftFigure--after');
        $(name).find($('.answer__rightFigure')).addClass('answer__rightFigure--after');
        $(name).find($('.answer__left')).addClass('answer__left--after');
        $(name).find($('.answer__right')).addClass('answer__right--after');
    });
}