import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGhostComponent } from './move-ghost.component';

describe('MoveGhostComponent', () => {
  let component: MoveGhostComponent;
  let fixture: ComponentFixture<MoveGhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGhostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
