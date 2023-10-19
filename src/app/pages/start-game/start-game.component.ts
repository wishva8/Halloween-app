import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  constructor(private router: Router) {}

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
    }, 500);
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
  }

  startGame() {
    this.fadeOutAudio();

    setTimeout(() => {
      this.router.navigate(['sequence-select-question']);
    }, 5000);
  }
}
