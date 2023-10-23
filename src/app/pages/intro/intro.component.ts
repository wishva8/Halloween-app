import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('start', style({ transform: 'translateY(100%)' })), // Start from the bottom
      state('end', style({ transform: 'translateY(-100%)' })), // Exit at the top
      transition('start => end', animate('60s linear')),
    ]),
  ],
})
export class IntroComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  storyText: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'; // Add your story text here
  scrollState: string = 'start';
  scrollTimeout:any
  fadeOutInterval:any
  navigationTimeout:any
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.autoScroll();
  }

  ngOnDestroy(): void {
    // Clean up all timeouts when leaving the page
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.fadeOutInterval) {
      clearInterval(this.fadeOutInterval);
    }
    if (this.navigationTimeout) {
      clearTimeout(this.navigationTimeout);
    }
  }

  fadeOutAudio() {
    const audio = this.audioPlayer.nativeElement;
    this.fadeOutInterval = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(this.fadeOutInterval);
        audio.pause();
      }
    }, 100);
  }

  autoScroll() {
    this.scrollTimeout = setTimeout(() => {
      this.scrollState = 'end';
    }, 200); // Adjust the duration as needed

    this.navigationTimeout = setTimeout(() => {
      this.autoScroll();
      this.fadeOutAudio();
      this.navigationTimeout = setTimeout(() => {
        this.router.navigate(['chapter-one-start']);
      }, 1000);
    }, 63000);
  }


}
