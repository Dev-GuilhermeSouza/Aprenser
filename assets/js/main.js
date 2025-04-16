const btn = document.getElementById('hamburguerBtn');
const menuMobile = document.getElementById('menuMobile');

btn.addEventListener('click', () => {
  menuMobile.classList.toggle('ativo');
});


  const links = document.querySelectorAll('.container__footer__navbar a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

