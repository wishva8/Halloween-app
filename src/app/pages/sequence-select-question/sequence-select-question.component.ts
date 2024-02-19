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
  // post office 1
  // police 2
  // hospital 3
  correctSequence: any[] = [1, 3, 2, 3, 1];
  isAnswerCorrect: boolean = true;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.intro();
  }

  changeSection(section: number) {
    console.log(section);

    this.section = section;
    if (section == 2) {
    }
    if (section == 3) {
      this.isAnswerCorrect = this.checkAnswers(
        this.selectedSequence,
        this.correctSequence
      );
    }
    if (section == 4) {
      this.findDevice();
    }
  }

  findDevice() {
    this.apiService.get('', 'find-device').then((response: any) => {});
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

  clearSelection() {
    this.selectedSequence = [];
  }

  setSequence(location: number) {
    if (this.selectedSequence.length >= 5) {
      console.log('press submit');
    } else {
      this.selectedSequence.push(location);
    }
  }

  checkAnswers(answer: number[], correctAnswer: number[]): boolean {
    if (answer.length !== correctAnswer.length) {
      return false;
    }

    // Sort both arrays and then compare them
    const sortedArray1 = answer.slice().sort();
    const sortedArray2 = correctAnswer.slice().sort();

    return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2);
  }
}
