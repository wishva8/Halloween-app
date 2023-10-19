import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultClientScreenComponent } from './default-client-screen.component';

describe('DefaultClientScreenComponent', () => {
  let component: DefaultClientScreenComponent;
  let fixture: ComponentFixture<DefaultClientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultClientScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultClientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
