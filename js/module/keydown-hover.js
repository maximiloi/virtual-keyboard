const keyHover = (e) => {
  document.querySelector('.app__out').focus();
  const targetCode = e.code;

  const kitKey = document.querySelectorAll('.key');
  kitKey.forEach((key) => {
    if (key.closest(`.${targetCode}`)) {
      key.classList.toggle('_on');
    }
  });
};

export default keyHover;
