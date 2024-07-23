$('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



const mainHead = document.querySelector(".main-head");
const scrollY = window.scrollY; // Initial scroll position

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const shouldBeFixed = currentScrollY > scrollY; // Check if scrolled down

  if (shouldBeFixed) {
    mainHead.classList.add("fixed-top"); // Add 'fixed' class for styling
  } else {
    mainHead.classList.remove("fixed-top"); // Remove 'fixed' class
  }
});



$(document).ready(function() {
  $('marquee').hover(
    function() {
      this.stop();
    },
    function() {
      this.start();
    }
  );
});