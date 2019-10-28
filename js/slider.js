var toggle1 = document.querySelector(".toggle-1");
var toggle2 = document.querySelector(".toggle-2");
var toggle3 = document.querySelector(".toggle-3");

var body = document.querySelector("body");
var slider1 = body.querySelector(".slider-1");
var slider2 = body.querySelector(".slider-2");
var slider3 = body.querySelector(".slider-3");

toggle1.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.add("background-1");
  if (body.classList.contains("background-2")) {
    body.classList.remove("background-2");
  }
  if (body.classList.contains("background-3")) {
    body.classList.remove("background-3");
  }
  if (slider2.classList.contains("slider-item--active")) {
    slider2.classList.remove("slider-item--active");
  };
  if (slider3.classList.contains("slider-item--active")) {
    slider3.classList.remove("slider-item--active");
  };
  slider1.classList.add("slider-item--active");
});

toggle2.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.add("background-2");
  if (body.classList.contains("background-1")) {
    body.classList.remove("background-1");
  }
  if (body.classList.contains("background-3")) {
    body.classList.remove("background-3");
  }
  if (slider1.classList.contains("slider-item--active")) {
    slider1.classList.remove("slider-item--active");
  };
  if (slider3.classList.contains("slider-item--active")) {
    slider3.classList.remove("slider-item--active");
  };
  slider2.classList.add("slider-item--active");
});

toggle3.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.add("background-3");
  if (body.classList.contains("background-1")) {
    body.classList.remove("background-1");
  }
  if (body.classList.contains("background-2")) {
    body.classList.remove("background-2");
  }
  if (slider1.classList.contains("slider-item--active")) {
    slider1.classList.remove("slider-item--active");
  };
  if (slider2.classList.contains("slider-item--active")) {
    slider2.classList.remove("slider-item--active");
  };
  slider3.classList.add("slider-item--active");
});
