import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('ResumeComponent initialized');
  }
  ngAfterViewInit(): void {
    // const observerOptions: IntersectionObserverInit = {
    //   threshold: 0.15,
    // };

    // const sectionObserver = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('visible');
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, observerOptions);

    // document.querySelectorAll<HTMLElement>('.fade-slide').forEach(section => {
    //   sectionObserver.observe(section);
    // });

    // const projectObserver = new IntersectionObserver((entries, observer) => {
    //   entries.forEach((entry, index) => {
    //     if (entry.isIntersecting) {
    //       setTimeout(() => {
    //         entry.target.classList.add('visible');
    //       }, index * 150);
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, observerOptions);

    // document.querySelectorAll<HTMLElement>('.project').forEach(project => {
    //   projectObserver.observe(project);
    // });
  }
}