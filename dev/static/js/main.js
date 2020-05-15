$(function() {

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

});