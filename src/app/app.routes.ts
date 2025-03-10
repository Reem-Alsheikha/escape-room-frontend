import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent }, // Hauptseite mit Escape Rooms
  { path: 'room/:id', component: RoomComponent } // Detailseite nur für Escape Room
];
