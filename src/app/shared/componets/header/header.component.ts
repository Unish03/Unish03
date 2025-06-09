import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    SharedModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router: Router,) { }
ngOnInit() {
  // Initialization logic can go here
  console.log('Header component initialized');    
}
closeTab() {
  //  window.close();
  window.location.href = 'https://www.google.co.in/';
}
}