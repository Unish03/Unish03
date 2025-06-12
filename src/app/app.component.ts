import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './shared/componets/footer/footer.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { SharedModule } from './shared/shared.module';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    FooterComponent,
    HeaderComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-project';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
  }
  ngOnInit() {
    // this.isLoggedIn = this.service.loggedInFlag ? true : false;
  }
  isDetailsRoute(): boolean {
    return this.router.url == '/details';
  }
  isResumeRoute(): boolean {
    return this.router.url == '/resume';
  }
}
