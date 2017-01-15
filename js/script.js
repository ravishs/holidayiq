$(document).ready(function() {

  //Video Review Slider : Desktop

  $('#topAttractions').slick({
    slidesToShow:3,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow'><img alt = '' src = 'images/next.png' /></a>"
  });
  $('#videoReviews').slick({
    slidesToShow:5,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow top35'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow top35'><img alt = '' src = 'images/next.png' /></a>"
  });
  $('#topDestinations').slick({
    slidesToShow:4,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow top45'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow top45'><img alt = '' src = 'images/next.png' /></a>"
  });
  $('#destBlogs').slick({
    slidesToShow:3,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow top35'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow top35'><img alt = '' src = 'images/next.png' /></a>"
  });
  $('#similarDestinations').slick({
    slidesToShow:5,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow top40'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow top40'><img alt = '' src = 'images/next.png' /></a>"
  });
  $('#topItenaries').slick({
    slidesToShow:2,
    prevArrow: "<a href = 'javascript:void(0)' class = 'slide-previous prevArrow top45'><img alt = '' src = 'images/prev.png' /></a>",
    nextArrow: "<a href = 'javascript:void(0)' class = 'slide-next nextArrow top45'><img alt = '' src = 'images/next.png' /></a>"
  });

  //Mobile: Sticky Nav
  var $ele = $('#stickyNav');
  var vTop = $ele.offset().top - parseFloat($ele.css('margin-top').replace(/auto/, 0));
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= vTop -65) {
      $ele.addClass('stick');
    } else {
      $ele.removeClass('stick');
    }
  });

});