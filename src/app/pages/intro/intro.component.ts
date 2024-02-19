import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.2;
  }

  ngOnDestroy(): void {
  }

  autoScroll() {
    this.router.navigate(['chapter-one-start']);
  }
}
