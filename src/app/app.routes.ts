import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
   
  { path: 'room/:id', component: RoomComponent } // Detailseite nur für Escape Room
];
