import { RouterModule } from '@angular/router';
import routeConfig from './app.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // ...other imports...
    RouterModule.forRoot(routeConfig)
  ],
  // ...other config...
})
export class AppModule {}