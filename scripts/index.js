const profileConteiner = document.querySelector('.profile');
const popupForm = document.querySelector('.popup');
const popupOpenButtonForm = profileConteiner.querySelector('.profile__edit-button');
const popupCloseButtonForm = popupForm.querySelector('.popup__close-icon');


const openPopupForm = function() {
  popupForm.classList.add('popup_opened');
}

const closePopupForm = function() {
  popupForm.classList.remove('popup_opened');
}

popupOpenButtonForm.addEventListener('click', openPopupForm);
popupCloseButtonForm.addEventListener('click', closePopupForm);

let nameProfile = profileConteiner.querySelector('.profile__name');
let jobProfile = profileConteiner.querySelector('.profile__job');
let nameInput = popupForm.querySelector('.popup__name');
let jobInput = popupForm.querySelector('.popup__job');
const popupButtonSubmit = popupForm.querySelector('.popup__button-submit');

function handleFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopupForm();
}

popupForm.addEventListener('submit', handleFormSubmit);
