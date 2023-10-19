import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sequence-select-question',
  templateUrl: './sequence-select-question.component.html',
  styleUrls: ['./sequence-select-question.component.scss']
})
export class SequenceSelectQuestionComponent implements OnInit {

  section: number = 1
  selectedSequence: any[] = []
  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    this.intro()
  }

  changeSection(section: number) {
    this.section = section
    if (section == 3) {
      this.playSequence()
    }
  }

  intro() {
    // introduction
    // ghost tell she will show the way
    // finally play sequence
  }

  playSequence() {
    // play sequence api
    // server will play sequence 
  }

  submitSequence() {
    this.selectedSequence
    console.log('sequence submitted');

    // if correct
    this.router.navigate([''])
  }

  setSequence(location: number) {
    this.selectedSequence.push(location)
    if (this.selectedSequence.length == 6) {
      this.submitSequence()
      this.selectedSequence = []
    }
  }
}
