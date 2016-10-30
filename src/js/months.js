//Month img animation
setTimeout(function(){
    $('.month__backPicture').css({
        'width': '100%',
        'height': '40%',
        'background-position': 'inherit',
    });
    $('.month__img').css({
        'background-attachment': 'inherit',
    });
}, 2000);

// Month content animation
setTimeout(function(){
    $('.month__infos').css({
        'transform': 'translateX(0)',
    });
}, 3000);