$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoWidth: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                autoHeight: true,
                margin: 0,
                autoWidth: false,
            },
            550: {
                items: 2,
                margin: 0,

            },

            991: {
                items: 4,
                margin: 0,
            }
        }
    });
});