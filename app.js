let play = document.querySelector(".play-button");

let video = document.querySelector("#video-style");

const hamburger = document.querySelector(".hamburger-mobile");

const mobile_menu  = document.querySelector('.mobile-options')

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});


hamburger.addEventListener('click',function(){
    console.log("clicked");
    mobile_menu.classList.toggle("mobile-options-show");
})


