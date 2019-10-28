var link = document.querySelector(".button--map-and-contacts");

var popupBack = document.querySelector( ".feedback-form-container");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".button--feedback-close");
var submit = popup.querySelector (".button--feedback-form");

var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=comment]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBack.classList.add("feedback-form-container-show");
  popup.classList.add("feedback-form-show");
  name:focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBack.classList.remove("feedback-form-container-show");
  popup.classList.remove("feedback-form-error");
  popup.classList.remove("feedback-form-show");
});

/*popupBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBack.classList.remove("feedback-form-container-show");
  popup.classList.remove("feedback-form-error");
  popup.classList.remove("feedback-form-show");
});*/

submit.addEventListener("click", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === escape) {
    evt.preventDefault();
    if ((popup.classList.contains("feedback-form-show")) && (popupBack.classList.contains("feedback-form-container-show"))) {
      popup.classList.remove("feedback-form-show");
      popup.classList.remove("feedback-form-error");
      popupBack.classList.remove("feedback-form-container-show");
    }
  }
});
