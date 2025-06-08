import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routeConfig from './app.routes';

// Import the routes from app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routeConfig), provideClientHydration(withEventReplay())]
};

@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig),
  ],
})
export class AppModule {}
