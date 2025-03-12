import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  menuOpen = false; // Standard: Menü geschlossen

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Öffnet/schließt Menü
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Sanftes Scrollen
      this.menuOpen = false; // Menü nach Klick schließen
    }
  }

    escapeRooms = [
    { id: 'maniac', name: 'Maniac', image: 'assets/maniac.jpg' },
    { id: 'psycho', name: 'Psycho', image: 'assets/psycho.jpg' },
    { id: 'alice-in-wonderland', name: 'Alice in Wonderland', image: 'assets/alice.jpg' },
    { id: 'money-heist', name: 'Money Heist', image: 'assets/money-heist.jpg' },
    { id: 'squid-game', name: 'Squid Game', image: 'assets/squid-game.jpg' }
  ];

  showRooms = true; // Escape Rooms nur auf der Startseite anzeigen

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showRooms = event.url === '/';
      }
    });
  }

  openRoomDetails(room: any) {
    this.router.navigate(['/room', room.id]);
  }
  
  scrollToBooking() {
    setTimeout(() => {
      const bookingSection = document.getElementById("booking-section");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Kleiner Timeout für sicheres Scrollen nach Navigation
  }



  
}