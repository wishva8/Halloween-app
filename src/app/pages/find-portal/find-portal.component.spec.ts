import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPortalComponent } from './find-portal.component';

describe('FindPortalComponent', () => {
  let component: FindPortalComponent;
  let fixture: ComponentFixture<FindPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
