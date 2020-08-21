const openBtn = document.querySelector('.main-section_btn--js');
const closeBtn = document.querySelector('.modal_close-btn--js');
const overlay = document.querySelector('.modal-overlay');


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', handleBackdropClick);

function openModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
}

function handleKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}