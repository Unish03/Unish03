import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCaptureComponent } from './device-capture.component';

describe('DeviceCaptureComponent', () => {
  let component: DeviceCaptureComponent;
  let fixture: ComponentFixture<DeviceCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceCaptureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
