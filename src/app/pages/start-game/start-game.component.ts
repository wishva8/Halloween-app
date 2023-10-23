import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionControlService } from 'src/app/services/action-control.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  isStartClicked: boolean = false;
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  constructor(private router: Router, public appService: ActionControlService) {

    this.appService.messageSource$.subscribe((value: any) => {
    });
  }

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  fadeOutAudio() {
    const audio = this.audioPlayer.nativeElement;
    const fadeOutInterval = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeOutInterval);
        audio.pause();
      }
    }, 100);
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
  }

  startGame() {
    this.isStartClicked = true;
    this.fadeOutAudio();
    setTimeout(() => {
      this.router.navigate(['intro']);
    }, 1000);
  }
}
