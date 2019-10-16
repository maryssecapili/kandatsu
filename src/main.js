// js code
// document.getElementById("js-btn").addEventListener("click", () => {
//   alert("JS compiles!!");
// });

// jquery code
jQuery(document).ready(function() {

  // Gallery Lightbox Init
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

  // Facilities Slider Init
  $('.facilities-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if ($(window).width() > 767)
    {
      if (scroll > 50) {
        $(".fixed-top").css("background" , "#e60019");
      }
  
      else{
        $(".fixed-top").css("background" , "rgba(0, 0, 0, 0.33)");  	
      }
    }

    if ($(this).scrollTop() > 50) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
  
});
