import { Injectable } from "@angular/core";
import { API_URL } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = `${API_URL}/rooms`;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createRoom(roomData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, roomData);
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

