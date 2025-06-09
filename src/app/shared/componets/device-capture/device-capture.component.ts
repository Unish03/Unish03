import { Component } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-capture',
  imports: [
    SharedModule,CommonModule
  ],
  templateUrl: './device-capture.component.html',
  styleUrl: './device-capture.component.css'
})
export class DeviceCaptureComponent {
deviceInfo: any;
constructor(private deviceService: DeviceDetectorService) { }
ngOnInit() {
  // Initialization logic can go here
  console.log('Device Capture component initialized');
  this.getDeviceInfo(); 
}

getDeviceInfo() {
  this.deviceInfo = this.deviceService.getDeviceInfo();
  console.log('Device Info:', this.deviceInfo.userAgent);
  console.log('Device Type:', this.deviceInfo);  
}
}