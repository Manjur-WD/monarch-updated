$('.company-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// document.addEventListener('DOMContentLoaded', function () {
//     const latestNews = document.querySelector('.latest-news');
//     const newsList = latestNews.querySelector('ul');
//     const listHeight = newsList.scrollHeight;
//     const containerHeight = latestNews.offsetHeight;
//     const midpoint = containerHeight / 2;
    
//     let scrollInterval;
//     let topPosition = 0;

//     function startScrolling() {
//       scrollInterval = setInterval(() => {
//         topPosition -= 1;
//         if (Math.abs(topPosition) >= listHeight - midpoint) {
//           topPosition = 0;
//         }
//         newsList.style.top = `${topPosition}px`;
//       }, 50); // Adjust the speed by changing the interval time
//     }

//     function stopScrolling() {
//       clearInterval(scrollInterval);
//     }

//     latestNews.addEventListener('mouseenter', stopScrolling);
//     latestNews.addEventListener('mouseleave', startScrolling);

//     // Start the scrolling when the page loads
//     startScrolling();
//   });

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


const imagesBox1 = [
  "./assets/images/album/img6.webp",
  "./assets/images/album/img5.jpg",
  "./assets/images/album/img4.jpg",
  "./assets/images/album/img3.jpg",
  "./assets/images/album/img2.jfif",
  "./assets/images/album/img1.jpg",
  
];

const imagesBox2 = [
  "./assets/images/album/img1.jpg",
  "./assets/images/album/img2.jfif",
  "./assets/images/album/img3.jpg",
  "./assets/images/album/img5.jpg",
  "./assets/images/album/img4.jpg",
  "./assets/images/album/img6.webp",
];

let currentIndexBox1 = 0;
let currentIndexBox2 = 0;

const box1Current = document.getElementById('box1-current');
const box1Next = document.getElementById('box1-next');
const box2Current = document.getElementById('box2-current');
const box2Next = document.getElementById('box2-next');

function showNextImage(boxCurrent, boxNext, images, currentIndex) {
  currentIndex = (currentIndex + 1) % images.length;
  boxNext.src = images[currentIndex];
  boxNext.classList.add('show');
  boxCurrent.classList.add('fade-out');

  setTimeout(() => {
      boxCurrent.src = images[currentIndex];
      boxCurrent.classList.remove('fade-out');
      boxNext.classList.remove('show');
  }, 1000); // Duration of the fade effect

  return currentIndex;
}

setInterval(() => {
  currentIndexBox1 = showNextImage(box1Current, box1Next, imagesBox1, currentIndexBox1);
}, 3000);

setInterval(() => {
  currentIndexBox2 = showNextImage(box2Current, box2Next, imagesBox2, currentIndexBox2);
}, 3000);


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