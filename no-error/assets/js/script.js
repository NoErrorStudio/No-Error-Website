/*===toggle icon nav bar===*/
const menuIcon = document.querySelector('#menu-icons');
const navbar = document.querySelector('.mobile-nav-bar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
};
