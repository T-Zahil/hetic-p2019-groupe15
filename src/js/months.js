$(document).ready(function(){

    // Add a Waypoint for each month. 
    // Each waypoint will trigger the function animateMonth().
    var january = new Waypoint({
        element: $('.january').find($('.month__back')),
        handler: function(direction) {
            console.log('coucou');
            animateMonth('.january');
        },
        offset: 20
    });

    var february = new Waypoint({
        element: $('.february'),
        handler: function(direction) {
            animateMonth('.february');
        }
    });

    var march = new Waypoint({
        element: $('.march'),
        handler: function(direction) {
            animateMonth('.march');
        }
    });

    var april = new Waypoint({
        element: $('.april'),
        handler: function(direction) {
            animateMonth('.april');
        }
    });

    var may = new Waypoint({
        element: $('.may'),
        handler: function(direction) {
            animateMonth('.may');
        }
    });

    var june = new Waypoint({
        element: $('.june'),
        handler: function(direction) {
            animateMonth('.june');
        }
    });

    var july = new Waypoint({
        element: $('.july'),
        handler: function(direction) {
            animateMonth('.july');
        }
    });

    var august = new Waypoint({
        element: $('.august'),
        handler: function(direction) {
            animateMonth('.august');
        }
    });

    var september = new Waypoint({
        element: $('.september'),
        handler: function(direction) {
            animateMonth('.september');
        }
    });

    var october = new Waypoint({
        element: $('.october'),
        handler: function(direction) {
            animateMonth('.october');
        }
    });

    var november = new Waypoint({
        element: $('.november'),
        handler: function(direction) {
            animateMonth('.november');
        }
    });

    var december = new Waypoint({
        element: $('.december'),
        handler: function(direction) {
            animateMonth('.december');
        }
    });

});

// This function will do the animation corresponding to the month on the screen
function animateMonth(name) {
    //Month img animation
    setTimeout(function(){
        $(name).find(".month__backPicture").css({
            'width': '100%',
            'height': '40%',
            'background-position': 'inherit',
            'position': 'inherit'
        });
        $('.month__img').css({
            'background-attachment': 'inherit',
        });
    }, 2000);

    // Month content animation
    setTimeout(function(){
        $(name).find('.month__infos').css({
            'transform': 'translateX(0)',
        });
    }, 3000);
}