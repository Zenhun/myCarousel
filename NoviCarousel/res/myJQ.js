$(document).ready(function () {
    var currentSlide;
    var nextSlide;
    var index;
    var move;

    window.setTimeout(moveNext, 2000);

    function moveSlide(currentSlide, nextSlide, move, index) {
        $('.image').animate(move, 600);

        currentSlide.removeClass('active-image');
        nextSlide.addClass('active-image');

        $("body").find('.dot').eq(index).addClass('active-dot').siblings('.dot').removeClass('active-dot');
    };

    var moveNext = function () {
        currentSlide = $('.active-image');
        nextSlide = currentSlide.next();
        if (nextSlide.length === 0) {
            nextSlide = $('.image').first();
            move = { "left": "+=1800px" };
            index = 0;
        } else {
            move = { "left": "-=600px" };
            index = nextSlide.index();
        }

        moveSlide(currentSlide, nextSlide, move, index);
    };


    $('li.image, .right-arrow').click(moveNext);

    $('.left-arrow').click(function () {
        currentSlide = $('.active-image');
        nextSlide = currentSlide.prev();
        if (nextSlide.length === 0) {
            nextSlide = $('.image').last();
            move = { "left": "-=1800px" };
            index = 3;
        } else {
            move = { "left": "+=600px" };
            index = nextSlide.index();
        }

        moveSlide(currentSlide, nextSlide, move, index);
    });

    $('.dot').click(function () {
        var firstDot = $('.active-dot').index();
        var secondDot;
        
        $(this).addClass('active-dot').siblings('.dot').removeClass('active-dot');
        secondDot = $(this).index();

        var diff = (secondDot - firstDot) * 600;
        move = { "left": "-=" + diff + "px" };
        $('.image').animate(move, 600);

        $("body").find('.image').eq(secondDot).addClass('active-image').siblings('.image').removeClass('active-image');
    });     
});