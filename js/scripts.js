$('.carousel-clients').owlCarousel({
  loop: !0,
  autoplay: !0,
  autoplayHoverPause: !0,
  smartSpeed: 500,
  autoplayTimeout: 2500,
  responsive: {
    0: {items:2},
    600: {items:3},
    1000: {items:5}
  }
});