function toggleMenu() {
  const sidebar = document.querySelector('.sidebar-menu');
  const menuIcon = document.querySelector('.hamburger-menu');
  
 
  sidebar.classList.toggle('open');
  
  
  menuIcon.textContent = sidebar.classList.contains('open') ? 'x' : '☰'; 
}



function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  const button = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block'; 
  } else {
    button.style.display = 'none'; 
  }
};