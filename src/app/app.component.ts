import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  scrollToBooking() {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
[x: string]: any;
  escapeRooms = [
    { name: 'Maniac', image: 'assets/maniac.jpg' },
    { name: 'Psycho', image: 'assets/psycho.jpg' },
    { name: 'Alice in Wonderland', image: 'assets/alice.jpg' },
    { name: 'Money Heist', image: 'assets/money-heist.jpg' },
    { name: 'Squid Game', image: 'assets/squid-game.jpg' }
  ];

  constructor(private router: Router) {}

  openRoomDetails(room: any) {
    this.router.navigate(['/room', room.name.toLowerCase().replace(/\s/g, '-')]);
  }
}

