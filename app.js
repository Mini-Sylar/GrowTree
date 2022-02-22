const plant_btn = [
  "plant-button purple-me",
  "plant-button yellow-me",
  "plant-button",
];

const play_btn = [
  "play-button purple-me",
  "play-button yellow-me",
  "play-button",
];

const mobileMenu = [
  "mobile-options purple-me-back",
  "mobile-options yellow-me-back",
  "mobile-options",
];

const logo_colors = ["logo purple-me-logo", "logo yellow-me-logo", "logo"];

const body_mobile = [
  "main-body purple-me-image",
  "main-body yellow-me-image",
  "main-body",
];

const play = document.querySelector(".play-button");
const video = document.querySelector("#video-style");
const hamburger = document.querySelector(".hamburger-mobile");
const mobile_menu = document.querySelector(".mobile-options");
const logo = document.querySelectorAll(".logo")[1];
const plant = document.querySelector(".plant-button");
const mainbody = document.querySelector(".main-body");



play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});

hamburger.addEventListener("click", function () {
  mobile_menu.classList.toggle("mobile-options-show");
});



plant.addEventListener("click", function () {
  // Plant Button
  plant.className =
    plant_btn[($.inArray(plant.className, plant_btn) + 1) % plant_btn.length];
  // Play Button
  play.className =
    play_btn[($.inArray(play.className, play_btn) + 1) % play_btn.length];
  // Mobile Menu
  mobile_menu.className =
    mobileMenu[
      ($.inArray(mobile_menu.className, mobileMenu) + 1) % mobileMenu.length
    ];
  // Logo
  logo.className =
    logo_colors[
      ($.inArray(logo.className, logo_colors) + 1) % logo_colors.length
    ];
  // Body
  mainbody.className =
    body_mobile[
      ($.inArray(mainbody.className, body_mobile) + 1) % body_mobile.length
    ];
});
