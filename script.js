function toggleMenu() {
  const sidebar = document.querySelector('.sidebar-menu');
  const menuIcon = document.getElementById('menuIcon');
 
  
 
  sidebar.classList.toggle('open');
  
  
  if (sidebar.classList.contains('open')) {
        menuIcon.src = 'Bilder/closeicon.svg'; 
        menuIcon.alt = 'Close Menu'; 
    } else {
        menuIcon.src = 'Bilder/hamburgermenu1.svg'; 
        menuIcon.alt = 'Hamburger Menu'; 
    }

    menuIcon.onload = () => {
      menuIcon.style.display = 'inline'; 
  }

}

document.querySelector(".toggle-button").addEventListener("click", function () {
  const list = document.querySelector(".project-list");
  list.classList.toggle("hidden");
  this.classList.toggle("open"); // Damit sich der Pfeil dreht
});







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