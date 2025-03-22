import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, FormsModule, BookingFormComponent],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  roomId: string = '';
  roomInfo: any = {};
  images: string[] = [];
  currentImageIndex = 0;
  showBookingForm: boolean = false; // Steuert die Sichtbarkeit des Buchungsformulars
  hasBookings : boolean = false; // Standardmäßig auf "false", bis eine Buchung erstellt wird.


  roomsData: any = {
    'maniac': {
      name: 'Maniac',
      images: ['/assets/maniac1.jpg', '/assets/maniac2.jpg', '/assets/maniac3.jpg'],
      participants: '2-7',
      difficulty: 'Extreme',
      time: '60',
      theme: 'Horror',
      description: 'Can you survive the Maniac’s twisted games?'
    },

    'money-heist': {
      name: 'Money Heist',
      images: ['/assets/moneyheist1.jpg', '/assets/moneyheist2.jpg', '/assets/moneyheist3.jpg'],
      participants: '4-6',
      difficulty: 'Medium',
      time: '70',
      theme: 'Action',
      description: 'Break into the bank and escape before the police arrive!'
    },

    'alice': {
  name: 'Alice in Wonderland',
  images: ['/assets/alice1.jpg', '/assets/alice2.jpg', '/assets/alice3.jpg'],
  participants: '2-5',
  difficulty: 'Easy',
  time: '60',
  theme: 'Fantasy',
  description: 'Follow Alice into the magical world of Wonderland and solve the mysteries to find your way back home!'
},

'psycho': {
  name: 'Psycho',
  images: ['/assets/psycho1.jpg', '/assets/psycho2.jpg', '/assets/psycho3.jpg'],
  participants: '3-6',
  difficulty: 'Hard',
  time: '50',
  theme: 'Horror',
  description: 'Trapped in the mind of a serial killer, you must uncover his dark secrets before becoming his next victim!'
},

'squid-game': {
  name: 'Squid Game',
  images: ['/assets/squidgame1.jpg', '/assets/squidgame2.jpg', '/assets/squidgame3.jpg'],
  participants: '4-8',
  difficulty: 'Medium',
  time: '60',
  theme: 'Thriller',
  description: 'Survive the deadly games, outsmart your opponents, and escape before time runs out. The stakes have never been higher!'
}
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];
      this.roomInfo = this.roomsData[this.roomId] || {};
      this.images = this.roomInfo.images || [];
    });
  }

  ngOnInit() {
    // Prüft beim Laden der Seite, ob es Buchungen gibt
    this.hasBookings = localStorage.getItem('hasBookings') === 'true';
    console.log(" hasBookings beim Laden der Seite:", this.hasBookings);
  }

  get currentImage() {
    return this.images[this.currentImageIndex] || '';
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }



  openBookingForm() {
    this.showBookingForm = true; // Zeigt das Buchungsformular an
  }

  
  
  
  handleFormSubmit(event: any) {
    console.log("Booking completed:", event);
    this.hasBookings = true;
    localStorage.setItem('hasBookings', 'true'); 

    console.log("📌 hasBookings Wert nach der Buchung:", this.hasBookings);

    alert('Booking successful. The button for my booking has been activated');
  }

  
  
  
  
  

  handleFormCancel() {
    this.showBookingForm = false; // Verbirgt das Buchungsformular
  }

  showBookings() {
    this.router.navigate(['/my-bookings']);
  }

    // Die Methode goBack() für den Back-Button
    goBack() {
      console.log("Zurück zur Escape Room Übersicht");
      this.router.navigate(['/']); // Zur Startseite oder Escape Room Übersicht navigieren
    }
  
}
