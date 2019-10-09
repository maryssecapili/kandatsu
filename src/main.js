// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

// jquery code
jQuery(document).ready(function() {
  jQuery("#jquery-btn").click(function() {
    alert("jQuery Works.");
  });

  jQuery('.school-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3
  });
  
  
  
});