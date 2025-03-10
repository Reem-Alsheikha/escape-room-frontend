import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  roomId: string = '';
  roomInfo: any = {};
  images: string[] = [];
  currentImageIndex = 0;

  roomsData: any = {
    'maniac': {
      name: 'Maniac',
      images: ['/assets/maniac1.jpg', '/assets/maniac2.jpg', '/assets/maniac3.jpg'],
      participants: '2-7',
      difficulty: 'Extreme',
      time: '60',
      theme: 'Horror',
      description: 'Can you survive the Maniac’s twisted games?'
    },
    'money-heist': {
      name: 'Money Heist',
      images: ['/assets/moneyheist1.jpg', '/assets/moneyheist2.jpg', '/assets/moneyheist3.jpg'],
      participants: '4-6',
      difficulty: 'Medium',
      time: '70',
      theme: 'Action',
      description: 'Break into the bank and escape before the police arrive!'
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];
      this.roomInfo = this.roomsData[this.roomId] || {};
      this.images = this.roomInfo.images || [];
    });
  }

  get currentImage() {
    return this.images[this.currentImageIndex] || '';
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  goBack() {
    this.router.navigate(['/']); // Zur Hauptseite zurück
  }
}
