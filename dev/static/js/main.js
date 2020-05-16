$(function() {

    $('.top_line_space').css('height', $('.top_line').outerHeight());

    $('.butter-button.hidden_menu, .butter-button.visible_menu').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.top_menu').removeClass('active');
            $('body').removeClass('navigation-opened')
        } else {
            $(this).addClass('active');
            $('.top_menu').addClass('active');
            $('body').addClass('navigation-opened');
            setTimeout(function() {
                $(window).trigger('resize').trigger('scroll')
            }, 500)
        }
    });

    lozad('.lozad', {
        load: function(el) {
            el.src = el.dataset.src;
            el.onload = function() {
                el.classList.add('fade')
            }
        }
    }).observe();


    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });


});