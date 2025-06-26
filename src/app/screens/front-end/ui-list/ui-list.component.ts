import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AngularComponent } from '../angular/angular.component';

@Component({
  selector: 'app-ui-list',
  imports: [SharedModule,AngularComponent],
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css'
})
export class UiListComponent {

}
