import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetHtmlComponent } from './cheat-sheet-html.component';

describe('CheatSheetHtmlComponent', () => {
  let component: CheatSheetHtmlComponent;
  let fixture: ComponentFixture<CheatSheetHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheatSheetHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheatSheetHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
