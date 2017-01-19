$(document).ready( function() {
    $('#myCarousel').carousel({
        interval:   4000
    });
    
    var clickEvent = false;
    $('#myCarousel').on('click', '.navCarousel a', function() {
            clickEvent = true;
            $('.navCarousel li').removeClass('active');
            $(this).parent().addClass('active');        
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.navCarousel').children().length -1;
            var current = $('.navCarousel li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.navCarousel li').first().addClass('active');    
            }
        }
        clickEvent = false;
    });
});