// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

// jquery code
jQuery(document).ready(function() {
  jQuery("#jquery-btn").click(function() {
    alert("jQuery Works.");
  });

  jQuery('.facilities-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  
  
  
});