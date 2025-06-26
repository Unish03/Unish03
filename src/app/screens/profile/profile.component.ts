import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@Component({
  selector: 'app-profile',
  imports: [
    SharedModule,
    PersonalDetailsComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
