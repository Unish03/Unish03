import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';

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
  ];
export default routeConfig; 

