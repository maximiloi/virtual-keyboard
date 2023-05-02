const languageChange = () => {
  const lng = document.querySelectorAll('.lng');
  if (lng[0].closest('.eng')) {
    lng.forEach((item) => {
      item.classList.remove('lng');
      item.classList.add('_hidden');
      item.firstElementChild.classList.remove('_active');
      item.firstElementChild.classList.add('_hidden');
      item.nextElementSibling.classList.remove('_hidden');
      item.nextElementSibling.classList.add('lng');
      item.nextElementSibling.firstElementChild.classList.remove('_hidden');
      item.nextElementSibling.firstElementChild.classList.add('_active');
    });
  } else {
    lng.forEach((item) => {
      item.classList.remove('lng');
      item.classList.add('_hidden');
      item.firstElementChild.classList.remove('_active');
      item.firstElementChild.classList.add('_hidden');
      item.previousElementSibling.classList.remove('_hidden');
      item.previousElementSibling.classList.add('lng');
      item.previousElementSibling.firstElementChild.classList.remove('_hidden');
      item.previousElementSibling.firstElementChild.classList.add('_active');
    });
  }
};

export default languageChange;
