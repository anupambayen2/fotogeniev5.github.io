

var swiper1 = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
  });

  const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0];
  arrowIcons = document.querySelectorAll(".wrapper i");

  let firstImgWidth = firstImg.clientWidth + 3;

  arrowIcons.forEach(icon => {
      icon.addEventListener("click", () =>{
        carousel.scrollLeft += icon.id =='left' ? - firstImgWidth : firstImgWidth;
      });
  });

