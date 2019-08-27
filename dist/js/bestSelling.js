"use strict";

$(document).ready(function () {
  var owl = $("#owl-demo");
  owl.owlCarousel({
    navigation: true,
    items: 4,
    loop: true,
    smartSpeed: 450,
    margin: 14,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 4
      }
    }
  });
});