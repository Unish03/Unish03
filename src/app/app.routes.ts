import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { ResumeComponent } from './resume/resume.component';

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
  ];
export default routeConfig; 

