import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent }, // Startseite
  { path: 'room/:name', component: RoomComponent }, // Escape-Room-Detailseiten
];
