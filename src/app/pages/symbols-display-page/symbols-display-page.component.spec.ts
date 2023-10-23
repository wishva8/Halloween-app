import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolsDisplayPageComponent } from './symbols-display-page.component';

describe('SymbolsDisplayPageComponent', () => {
  let component: SymbolsDisplayPageComponent;
  let fixture: ComponentFixture<SymbolsDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolsDisplayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolsDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
