import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { UiListComponent } from './screens/front-end/ui-list/ui-list.component';
import { CheatSheetHtmlComponent } from './screens/front-end/cheat-sheet-html/cheat-sheet-html.component';

const routeConfig: Routes = [
    {
      path: 'home',
      component: LoginComponent,
      title: 'Home page',
    },
    {
      path: 'details',
      component: ProfileComponent,
      title: 'Home details',
    },
    {
      path: 'resume',
      component: ResumeComponent,
      title: 'Resume',
    },
    {
      path: 'frontend',
      component: UiListComponent,
      title: 'Frontend',
    },
    {
      path: 'cheat-sheet-html',
      component: CheatSheetHtmlComponent,
      title: 'Cheat Sheet HTML',
    }
  ];
export default routeConfig; 

