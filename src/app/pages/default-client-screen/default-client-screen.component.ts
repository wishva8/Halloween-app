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

  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  constructor(
    private actionControlService: ActionControlService,
    private apiService: ApiService,
    private storageService: StorageService
  ) {
    this.actionControlService.randomGhost$.subscribe(() => {
      this.changeGhostStatus(); // Call your function here
    });
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

  ngOnInit(): void {
    // Call randomFunction after the random interval
    setInterval(() => {
      this.showDots = !this.showDots;
      setTimeout(() => {
        this.showDots = !this.showDots;
      }, 500);
      // Call the function recursively to continue calling it randomly
    }, 10000);
  }
}
