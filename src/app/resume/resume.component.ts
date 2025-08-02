import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-resume',
  imports: [SharedModule,CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  isMenuOpen = false;
  isDarkMode = false;


  constructor(private viewportScroller: ViewportScroller, private renderer: Renderer2) { }

  ngOnInit() {
    // Get elements by IDs with proper typing
    console.log('ResumeComponent initialized');
  }
  ngAfterViewInit(): void {
  }
  scrollToTop(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-open');
    } else {
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
  submitFeedback() {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (input && input.value) {
      const utterance = new SpeechSynthesisUtterance(`Feedback received: ${input.value}`);
      speechSynthesis.speak(utterance);
      input.value = ''; // Clear the input field after submission
    } else {
      const utterance = new SpeechSynthesisUtterance(`Feedback input is empty`);
      speechSynthesis.speak(utterance);
    }
  }

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  document.querySelector('.resume-container')?.classList.toggle('dark-mode', this.isDarkMode);
}
}