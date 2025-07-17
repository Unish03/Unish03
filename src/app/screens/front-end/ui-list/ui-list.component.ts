import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AngularComponent } from '../angular/angular.component';
import { javaQuestionsHtml } from '../../../shared/componets/utils/data-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-list',
  imports: [SharedModule,AngularComponent, CommonModule],
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css'
})
export class UiListComponent {
questions: any[] = javaQuestionsHtml;
}
