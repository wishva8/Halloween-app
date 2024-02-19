import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { ActionControlService } from 'src/app/services/action-control.service';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-default-client-screen',
  templateUrl: './default-client-screen.component.html',
  styleUrls: ['./default-client-screen.component.scss'],
})
export class DefaultClientScreenComponent implements OnInit, OnDestroy {
  showDots: boolean = false;
  ghostStatus: boolean = false;
  wallpaper: string;

  timeOut: any;

  locationGroups: any = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  constructor(
    private actionControlService: ActionControlService,
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.actionControlService.messageSource$.subscribe(() => {
      this.changeGhostStatus(); // Call your function here
    });
    this.wallpaper = `assets/wallpapers/${this.storageService.getStationID()}.jpg`;
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.stop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeOut);
  }

  changeGhostStatus() {
    this.ghostStatus = !this.ghostStatus;
    // if (this.ghostStatus) {
    //   this.playAudio();
    // } else {
    //   this.stopAudio();
    // }
  }
  ngOnInit() {
    this.toggleWithRandomDelay();
  }

  toggleWithRandomDelay(): void {
    this.showDots = true;

    this.timeOut = setTimeout(() => {
      this.showDots = false;
      const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
      this.timeOut = setTimeout(
        () => this.toggleWithRandomDelay(),
        randomDelay
      );
    }, 100);
  }
}
