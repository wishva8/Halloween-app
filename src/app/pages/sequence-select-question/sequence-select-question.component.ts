import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sequence-select-question',
  templateUrl: './sequence-select-question.component.html',
  styleUrls: ['./sequence-select-question.component.scss'],
})
export class SequenceSelectQuestionComponent implements OnInit {
  section: number = 1;
  selectedSequence: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.intro();
  }

  changeSection(section: number) {
    this.section = section;
    if (section == 2) {
      this.playSequence();
    }
    if (section == 3) {
      setInterval(() => {
        this.ghostHangingAround();
      }, 15000);
    }
  }

  intro() {
    // introduction
    // ghost tell she will show the way
    // finally play sequence
  }

  ghostHangingAround() {
    this.apiService
      .get(
        '',
        `ghost-hangout-around/start/${parseInt(
          this.storageService.getLocationGroupID()
        )}`
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {});
  }

  playSequence() {
    this.apiService
      .get('', 'move-ghost')
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {});
  }

  submitSequence() {
    this.selectedSequence;
    // if correct
    this.section = 5;
    // this.router.navigate(['']);
  }

  setSequence(location: number) {
    this.selectedSequence.push(location);
    if (this.selectedSequence.length == 6) {
      this.submitSequence();
      this.selectedSequence = [];
    }
  }
}
