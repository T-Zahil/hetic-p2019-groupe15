setTimeout(function(){
    console.log('coucou');
    $('.month__imgWrapper').css({
        'width': '70vw',
        'height': '40vh',
        'align-self': 'flex-start',
        'position': 'absolute',
        'right': '0',
        'margin-top': '8vh'
    });
    $('.month__img').css({
        // 'background': 'url(../img/smoker.png',
        'background-attachment': 'inherit',
    });
}, 2000);