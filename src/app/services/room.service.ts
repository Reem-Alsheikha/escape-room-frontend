import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:5000/api/rooms'; // Backend-URL

  constructor(private http: HttpClient) {}

  //  Alle Escape Rooms abrufen (GET)
  getRooms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //  Neuen Escape Room erstellen (POST)
  createRoom(room: any): Observable<any> {
    return this.http.post(this.apiUrl, room);
  }

  //  Escape Room löschen (DELETE)
  deleteRoom(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

