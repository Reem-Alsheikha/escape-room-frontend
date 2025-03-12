import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:5000/api/bookings'; // Backend-URL

  constructor(private http: HttpClient) {}

  //  Alle Buchungen abrufen (GET)
  getBookings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //  Neue Buchung erstellen (POST)
  createBooking(booking: any): Observable<any> {
    return this.http.post(this.apiUrl, booking);
  }

  //  Buchung löschen (DELETE)
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
