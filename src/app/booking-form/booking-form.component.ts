import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';


@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  bookingData = {
    id: '',
    name: '',
    email: '',
    phone: '',
    participants: 1,
    date: '',
    time: '',
    customerId: '65e3f9d1b9e0b41d6f1e9a5b', // 🔥 Testweise eine feste ID eintragen
    roomId: '65e3f9d1b9e0b41d6f1e9a5a'  // 🔥 Testweise eine feste ID eintragen
  };
  
  

  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formCancelled = new EventEmitter<void>();

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    if (this.isValid()) {
      console.log("📌 Final gesendete Buchungsdaten:", this.bookingData); // 🔥 Debugging
  
      this.bookingService.createBooking(this.bookingData).subscribe(() => {
        alert('✅ Buchung erfolgreich!');
  
        // 🛑 Speichere die Info über die Buchung, bevor das Formular zurückgesetzt wird
        localStorage.setItem('hasBookings', 'true');
  
        // Setze das Formular zurück
        this.bookingData = { id: '', name: '', email: '', phone: '', participants: 1, date: '', time: '', customerId: '', roomId: '' };
  
        // 🔥 Falls der Button in einer anderen Komponente ist, muss ein Event gesendet werden
        this.formSubmitted.emit();
      }, error => {
        console.error('❌ Fehler beim Buchen:', error);
        alert('❌ Fehler beim Buchen!');
      });
    } else {
      alert('⚠️ Bitte alle Felder ausfüllen!');
    }
  }
  
  
  

  onCancel() {
    this.formCancelled.emit();
  }

  isValid() {
    console.log("📌 Debug: Buchungsdaten beim Prüfen", this.bookingData); // 🔥 DEBUG
    
    return !!this.bookingData.name &&
           !!this.bookingData.email &&
           !!this.bookingData.phone &&
           this.bookingData.participants > 0 &&
           !!this.bookingData.date &&
           !!this.bookingData.time;
  }
  

  
  




}
