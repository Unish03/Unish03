import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsKeysComponent } from './commands-keys.component';

describe('CommandsKeysComponent', () => {
  let component: CommandsKeysComponent;
  let fixture: ComponentFixture<CommandsKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandsKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandsKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
