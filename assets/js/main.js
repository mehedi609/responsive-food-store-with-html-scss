$(document).ready(function () {
  $(".top-products__food-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // $('.nav-trigger').click(function(){
  //   $('.site-content-wrapper').toggleClass('scaled');
  // })
});
