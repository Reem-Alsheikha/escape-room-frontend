import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  bookingData = {
    name: '',
    email: '',
    phone: '',
    participants: 1
  };

  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formCancelled = new EventEmitter<void>();

  onSubmit() {
    if (this.isValid()) {
      this.formSubmitted.emit(this.bookingData);
    } else {
      alert('Bitte füllen Sie alle erforderlichen Felder aus.');
    }
  }

  onCancel() {
    this.formCancelled.emit();
  }

  isValid() {
    return this.bookingData.name && this.bookingData.email && this.bookingData.phone && this.bookingData.participants > 0;
  }
}
