const nav = document.querySelector("nav");
const scroll = document.querySelector(".scroll");
const btn = document.querySelector("nav .links li:nth-child(6)");
const drop = document.querySelector(".drop");
const bars = document.querySelector(".bars");
///////////////////////////////////////////////////////////////////////////////////////////////////////
const themeSwitch = document.querySelector(" .themeswitch");
let darkmode = localStorage.getItem("dark_mode");

const enable = () => {
  document.body.classList.add("dark_mode");
  localStorage.setItem("dark_mode", "active");
};

const disable = () => {
  document.body.classList.remove("dark_mode");
  localStorage.setItem("dark_mode", null);
};

if (darkmode === "active") enable();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("dark_mode");
  darkmode !== "active" ? enable() : disable();
});

///////////////////////////////////////////////////////////////////////////////
onscroll = function () {
  let val = scrollY;

  if (val >= 88) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }

  if (val >= 431.20001220703125) {
    scroll.style.scale = "1";
  } else {
    scroll.style.scale = "0.0";
  }
};

////////////////////////////////////////////////////////////////

btn.onclick = () => {
  drop.classList.toggle("show");
  btn.classList.toggle("xmark");
};
