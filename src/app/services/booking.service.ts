import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = `${API_URL}/bookings`;

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, bookingData);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}