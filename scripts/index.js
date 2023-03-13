const profileConteiner = document.querySelector('.profile');
const popupForm = document.querySelector('.popup');
const popupOpenButtonForm = profileConteiner.querySelector('.profile__edit-button');
const popupCloseButtonForm = popupForm.querySelector('.popup__close-icon');
let nameProfile = profileConteiner.querySelector('.profile__name');
let jobProfile = profileConteiner.querySelector('.profile__job');
let nameInput = popupForm.querySelector('.popup__item_el_name');
let jobInput = popupForm.querySelector('.popup__item_el_job');
const popupButtonSubmit = popupForm.querySelector('.popup__button-submit');

const openPopupForm = function() {
  popupForm.classList.add('popup_opened');
}

const closePopupForm = function() {
  popupForm.classList.remove('popup_opened');
}

popupOpenButtonForm.addEventListener('click', function() {
  openPopupForm();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
popupCloseButtonForm.addEventListener('click', closePopupForm);

function handleFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopupForm();
}

popupForm.addEventListener('submit', handleFormSubmit);
