import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceSelectQuestionComponent } from './sequence-select-question.component';

describe('SequenceSelectQuestionComponent', () => {
  let component: SequenceSelectQuestionComponent;
  let fixture: ComponentFixture<SequenceSelectQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceSelectQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenceSelectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
