import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';


export const appRoutes: Routes = [
   
  { path: 'room/:id', component: RoomComponent }, // Detailseite nur für Escape Room
  { path: 'my-bookings', component: MyBookingsComponent },
];
