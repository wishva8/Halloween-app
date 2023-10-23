import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOneStartComponent } from './chapter-one-start.component';

describe('ChapterOneStartComponent', () => {
  let component: ChapterOneStartComponent;
  let fixture: ComponentFixture<ChapterOneStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterOneStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterOneStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
