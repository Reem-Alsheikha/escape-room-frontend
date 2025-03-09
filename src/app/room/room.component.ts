import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // 🔹 Hier hinzufügen!

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule], // 🔹 Hier hinzufügen!
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  roomName: string = '';

  constructor(private route: ActivatedRoute) {
    this.roomName = this.route.snapshot.paramMap.get('name') || '';
  }
}
