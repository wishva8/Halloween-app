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
        audio.volume -= 0.1; // Decrease the volume by 0.1 (adjust as needed)
      } else {
        clearInterval(fadeOutInterval); // Clear the interval when volume is low
        audio.pause(); // Pause the audio
      }
    }, 500); // Adjust the interval duration (in milliseconds) as needed
  }


  stopAudio() {
    this.audioPlayer.nativeElement.pause();
  }

  startGame() {
    this.fadeOutAudio();
    this.router.navigate(['sequence-select-question']);
  }
}
