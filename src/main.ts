import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    // ...other providers...
  ]
});
// This code bootstraps the Angular application using the AppComponent and appConfig. It handles any errors that may occur during the bootstrap process and logs them to the console.