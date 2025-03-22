import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-bookings',
    standalone: true, 
    imports: [CommonModule], 
    templateUrl: './my-bookings.component.html',
    styleUrls: ['./my-bookings.component.css']
  })
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.bookingService.getBookings().subscribe(
      (data: any) => {
        this.bookings = data;
        console.log("Geladene Buchungen:", this.bookings);
      },
      error => {
        console.error('Fehler beim Abrufen der Buchungen:', error);
      }
    );
  }

   //  Methode zum Löschen einer Buchung
   deleteBooking(bookingId: string) {
    if (confirm("Willst du diese Buchung wirklich löschen?")) {
      this.bookingService.deleteBooking(bookingId).subscribe(() => {
        console.log(`Buchung mit ID ${bookingId} wurde gelöscht`);
        alert("Buchung wurde erfolgreich gelöscht!");
        this.getBookings(); // Buchungen nach dem Löschen neu laden
      }, error => {
        console.error(" Fehler beim Löschen:", error);
        alert("Fehler beim Löschen der Buchung.");
      });
    }
  }

  //  Methode für den "Zurück zur Startseite"-Button
  goBack() {
    this.router.navigate(['/']); // Zur Startseite navigieren
  }
}






