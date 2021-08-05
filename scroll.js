(function ($) {
    $(window).on('load', function () {
        $('.mycustom-scroll').mCustomScrollbar();
    });
})(jQuery);
$('.mycustom-scroll').mCustomScrollbar({
    axis: 'y',
    theme: 'dark-2',
    scrollInertia: '330',
    setHeight: '311px',
    mouseWheel: {
        deltaFactor: 300
    }
});