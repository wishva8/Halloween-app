import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionControlService } from 'src/app/services/action-control.service';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-default-client-screen',
  templateUrl: './default-client-screen.component.html',
  styleUrls: ['./default-client-screen.component.scss'],
})
export class DefaultClientScreenComponent implements OnInit {
  showDots: boolean = false;
  ghostStatus: boolean = false;
  wallpaper: string;

  locationGroups: any = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  constructor(
    private actionControlService: ActionControlService,
    private apiService: ApiService,
    private storageService: StorageService
  ) {
    this.actionControlService.randomGhost$.subscribe(() => {
      this.changeGhostStatus(); // Call your function here
    });
    this.wallpaper = `assets/wallpapers/${this.storageService.getStationID()}.jpg`;
    this.storageService.getStationID();
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.stop();
  }

  changeGhostStatus() {
    this.ghostStatus = !this.ghostStatus;
    if (this.ghostStatus) {
      this.playAudio();
    } else {
      this.stopAudio();
    }
  }
  ngOnInit() {
    this.toggleWithRandomDelay();
  }
  
  toggleWithRandomDelay(): void {
    this.showDots = true;

    setTimeout(() => {
      this.showDots = false;
      const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
      setTimeout(() => this.toggleWithRandomDelay(), randomDelay);
    }, 100);
  }
}
