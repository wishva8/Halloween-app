import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionControlService } from 'src/app/services/action-control.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-move-ghost',
  templateUrl: './move-ghost.component.html',
  styleUrls: ['./move-ghost.component.scss'],
})
export class MoveGhostComponent {
  ghostStatus: boolean = false;
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  wallpaper: string;
  showDots: boolean = false;
  stationId: any;
  constructor(
    private actionControlService: ActionControlService,
    private storageService: StorageService
  ) {
    this.stationId = this.storageService.getStationID();
    this.actionControlService.componentFunctionCalled$.subscribe(() => {
      this.changeGhostStatus(); // Call your function here
    });

    this.wallpaper = `assets/wallpapers/${this.stationId}.png`;
    this.toggleWithRandomDelay();
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

  toggleWithRandomDelay(): void {
    this.showDots = true;
    setTimeout(() => {
      this.showDots = false;
      const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
      setTimeout(() => this.toggleWithRandomDelay(), randomDelay);
    }, 100);
  }
}
