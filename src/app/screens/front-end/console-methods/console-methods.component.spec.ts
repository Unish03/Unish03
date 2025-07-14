import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMethodsComponent } from './console-methods.component';

describe('ConsoleMethodsComponent', () => {
  let component: ConsoleMethodsComponent;
  let fixture: ComponentFixture<ConsoleMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
