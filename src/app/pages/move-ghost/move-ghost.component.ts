import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionControlService } from 'src/app/services/action-control.service';

@Component({
  selector: 'app-move-ghost',
  templateUrl: './move-ghost.component.html',
  styleUrls: ['./move-ghost.component.scss']
})
export class MoveGhostComponent {
  ghostStatus: boolean = false;
  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  constructor(private actionControlService: ActionControlService) {
    this.actionControlService.componentFunctionCalled$.subscribe(() => {
      this.changeGhostStatus(); // Call your function here
    });
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  changeGhostStatus() {
    this.ghostStatus = !this.ghostStatus;
    if (this.ghostStatus) {
      this.playAudio();
    }
  }

  test() {}
}
