
// Funktion zum Öffnen und Schließen des Menüs (Sidebar)
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar-menu');
  const menuIcon = document.getElementById('menuIcon');
 
  
  // Menü-Zustand umschalten (offen oder geschlossen)
  sidebar.classList.toggle('open');
  
 // Icon je nach Zustand des Menüs wechseln 
  if (sidebar.classList.contains('open')) {
        menuIcon.src = 'Bilder/closeicon.svg'; // "Close"-Icon setzen
        menuIcon.alt = 'Close Menu'; // Alternativtext für Barrierefreiheit
    } else {
        menuIcon.src = 'Bilder/hamburgermenu1.svg'; // "Hamburger"-Icon setzen
        menuIcon.alt = 'Hamburger Menu'; // Alternativtext für Barrierefreiheit
    }

    // Sicherstellen, dass das Icon angezeigt wird, nachdem es geladen wurde
    menuIcon.onload = () => {
      menuIcon.style.display = 'inline'; 
  }

}

// Event Listener für das Umschalten der Projektliste (unter dem Menüpunkt Projekte)
document.querySelector(".toggle-button").addEventListener("click", function () {
  const list = document.querySelector(".project-list");  // Projektliste auswählen
  list.classList.toggle("hidden"); // Projektliste ein-/ausblenden
  this.classList.toggle("open"); // Damit sich der Pfeil dreht
});






// Funktion für sanftes Scrollen nach oben
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sichtbarkeit des „Zurück nach oben“-Buttons je nach Scrollposition steuern
window.onscroll = function () {
  const button = document.querySelector('.scroll-to-top');

  // Wenn weiter als 100px gescrollt wurde, Button anzeigen – sonst ausblenden
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block'; 
  } else {
    button.style.display = 'none'; 
  }
};