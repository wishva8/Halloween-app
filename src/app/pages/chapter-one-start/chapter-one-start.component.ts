import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chapter-one-start',
  templateUrl: './chapter-one-start.component.html',
  styleUrls: ['./chapter-one-start.component.scss'],
})
export class ChapterOneStartComponent implements OnInit {
  isGameStarted: boolean = false;
  isStartClicked: boolean = false;
  isSequenceEnd: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}
  ngOnInit(): void {}

  startChapterOne() {
    this.isGameStarted = true;
    this.isStartClicked = true;

    this.apiService.get('', `move-ghost`).then((response: any) => {
      this.isSequenceEnd = true;
      this.router.navigate(['sequence-select-question'])
    });
  }
}
