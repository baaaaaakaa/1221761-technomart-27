var popup = document.querySelectorAll('.popup');
var popupFeedback = document.querySelector('.popup-feedback');
var popupMap = document.querySelector('.popup-map');
var popupCatalog = document.querySelector('.popup-catalog');

var openFeedback = document.querySelector('.button-feedback');
var openMap = document.querySelector('.map-open');
var openCatalog = document.querySelectorAll('.button_buy');
console.log(openCatalog);

var closePopup = document.querySelectorAll('.popup-close');
console.log(closePopup);

if (popupFeedback) {
  var feedbackForm = popupFeedback.querySelector('form');
  var feedbackName = popupFeedback.querySelector('[name = name]');
  var feedbackEmail = popupFeedback.querySelector('[name = email]');
  var feedbackText = popupFeedback.querySelector('textarea');

  openFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('popup-show');
    feedbackName.focus();
  });

  feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      evt.preventDefault();
      popupFeedback.classList.remove('popup-error');
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add('popup-error');
    };
  });
};


if (popupMap) {
  openMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('popup-show');
  });
};

if (popupCatalog) {
  openCatalog.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupCatalog.classList.add('popup-show');
    });
  });
};

closePopup.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.forEach(function (pup) {
      pup.classList.remove('popup-show');
      pup.classList.remove('popup-error');
    });
  });
});

window.addEventListener('keydown', function (evt){
  if (evt.keyCode === 27) {
    popup.forEach( function (pup) {
      if (pup.classList.contains('popup-show')) {
        evt.preventDefault;
        pup.classList.remove('popup-show');
        pup.classList.remove('popup-error');
      };
    });
  };
});
