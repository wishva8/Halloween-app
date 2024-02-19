import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanTokenComponent } from './scan-token.component';

describe('ScanTokenComponent', () => {
  let component: ScanTokenComponent;
  let fixture: ComponentFixture<ScanTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
