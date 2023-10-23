import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSymbolsPageComponent } from './select-symbols-page.component';

describe('SelectSymbolsPageComponent', () => {
  let component: SelectSymbolsPageComponent;
  let fixture: ComponentFixture<SelectSymbolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSymbolsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSymbolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
