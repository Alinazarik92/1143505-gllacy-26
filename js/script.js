(function(){
  var openPopup = document.querySelector(".button--map-and-contacts");

  var overlay = document.querySelector( ".overlay");
  var popup = document.querySelector(".feedback-form");
  var closeBtnPopup = popup.querySelector(".button--feedback-close");
  var submitBtnPopup = popup.querySelector (".button--feedback-form");
  var name = popup.querySelector ("input[type=text]");
  var email = popup.querySelector("input[type=email]");
  var text = popup.querySelector("textarea");
  
  
  var onEscPress = function(evt) {
    if (evt.keyCode === 27) {
      onClosePopup(evt);
    }
  };

  var onClosePopup = function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    popup.classList.toggle("feedback-form--error", false);
    popup.classList.remove("feedback-form--show");
    closeBtnPopup.removeEventListener("click", onClosePopup);
    overlay.removeEventListener("click", onClosePopup);
    window.removeEventListener("keydown", onEscPress);
  };

  openPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    popup.classList.add("feedback-form--show");
    closeBtnPopup.addEventListener("click", onClosePopup);
    overlay.addEventListener("click", onClosePopup);
    window.addEventListener("keydown", onEscPress);
  });


  submitBtnPopup.addEventListener("click", function (evt) {

    if (!name.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.toggle("feedback-form--error", false);
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-form--error");
    }
  });

})();

(function(){
  var toggleList = document.querySelectorAll(".slider__toggle");
  var body = document.querySelector("body");

  var onClickToggle = function(evt) {
    evt.preventDefault();
    var activeToggle = evt.target;
    var number = activeToggle.dataset.number;
    body.classList.remove(body.className);
    body.classList.add("slide-" + number);
  };

  for (var i = 0; i < toggleList.length; i++) {
    toggleList[i].addEventListener("click", onClickToggle);
  }
})();

