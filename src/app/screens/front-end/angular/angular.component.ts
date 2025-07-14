import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ConsoleMethodsComponent } from '../console-methods/console-methods.component';
import { CommandsKeysComponent } from '../commands-keys/commands-keys.component';
import { InterviewQuestionsComponent } from '../interview-questions/interview-questions.component';

@Component({
  selector: 'app-angular',
  imports: [SharedModule,ConsoleMethodsComponent,CommandsKeysComponent,InterviewQuestionsComponent
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {

}
