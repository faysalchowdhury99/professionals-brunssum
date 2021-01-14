// SideNav
function openNav() {
  document.getElementById("fullnav").style.width = "100%";
}

function closeNav() {
  document.getElementById("fullnav").style.width = "0";
}

// Fixed Nav Onscroll

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
      $('nav').addClass('fixed-nav');
  } else {
      $('nav').removeClass('fixed-nav');
  }
});

// Testimonial Slider
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      // when window width is <= 499px
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      }
  }
});


// Back to top Button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.opacity = "1";
  } else {
      mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

