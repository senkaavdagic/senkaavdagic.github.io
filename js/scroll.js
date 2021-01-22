$(window).scroll(function () {
    
    if ($(window).scrollTop() > 199) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 200) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
