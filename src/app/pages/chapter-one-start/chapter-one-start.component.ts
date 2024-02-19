import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chapter-one-start',
  templateUrl: './chapter-one-start.component.html',
  styleUrls: ['./chapter-one-start.component.scss'],
})
export class ChapterOneStartComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  isGameStarted: boolean = false;
  isStartClicked: boolean = false;
  isSequenceEnd: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}
  ngOnInit(): void {}

  fadeOutAudio() {
    // const audio = this.audioPlayer.nativeElement;
    // this.fadeOutInterval = setInterval(() => {
    //   if (audio.volume > 0.1) {
    //     audio.volume -= 0.1;
    //   } else {
    //     clearInterval(this.fadeOutInterval);
    //     audio.pause();
    //   }
    // }, 100);
  }

  startChapterOne() {
    this.isGameStarted = true;
    this.isStartClicked = true;

    this.apiService.get('', `move-ghost`).then((response: any) => {
      this.isSequenceEnd = true;
      this.router.navigate(['sequence-select-question'])
    });
  }
}
