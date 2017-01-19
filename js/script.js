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
    // Highlight Nav on scroll
    $('.sectionWrap').each(function() {
      if($(window).scrollTop() >= $(this).offset().top -60) {
        var id = $(this).attr('id');
        $('ul.nav-tabs li').removeClass('active');
        $('ul.nav-tabs li[data-target='+ id +']').addClass('active');
      }
    });
  });

  //Tooltips
  $('.documentItem h5').each(function() {
    $(this).attr('title',$(this).html());
  });

});

//Scroll to Section
function scrollToSection (section,tab) {
  var $ele = $('#stickyNav');
  var coverHeight = 120;
  if ($ele.hasClass( "stick" )) {
    coverHeight = 50;
  }
  $('ul.nav-tabs li').removeClass('active');
  $(tab).addClass('active');
  $('html,body').animate({
    scrollTop: $("#"+section).offset().top -coverHeight},
  1000);
}

var liked = false;
var been  = false;
function like(ele) {
  liked = !liked;
  if (liked) {
    $(ele).attr('src','images/liked.png');
  } else {
    $(ele).attr('src','images/like.png');
  }
}

function bookmark (ele) {
  been = !been;
  if (been) {
    $(ele).attr('src','images/been-green.png');
  } else {
    $(ele).attr('src','images/been.png');
  }
}

function addToWishList (ele) {
  liked = !liked;
  if (liked) {
    $(ele).find('img').attr('src','images/liked.png');
    $(ele).find('span.msg').html('Added To Wishlist!');
  } else {
    $(ele).find('img').attr('src','images/like.png');
    $(ele).find('span.msg').html('Add To Wishlist');
  }
}

function beenHere (ele) {
  been = !been;
  if (been) {
    $(ele).find('img').attr('src','images/been-green.png');
  } else {
    $(ele).find('img').attr('src','images/been.png');
  }
}
