function toggleMenu() {
  const sidebar = document.querySelector('.sidebar-menu');
  const menuIcon = document.querySelector('.hamburger-menu');
  
 
  sidebar.classList.toggle('open');
  
  
  menuIcon.textContent = sidebar.classList.contains('open') ? 'x' : '☰'; 
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeButton = document.querySelector('.dark-mode-toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeButton.innerHTML = '☀️ <span>Light Mode</span>';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeButton.innerHTML = '🌙 <span>Dark Mode</span>';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.querySelector('.dark-mode-toggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeButton.innerHTML = '☀️ <span>Light Mode</span>';
  } else {
    darkModeButton.innerHTML = '🌙 <span>Dark Mode</span>';
  }
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