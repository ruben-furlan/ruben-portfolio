import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cert {
  name: string;
  platform: string;
  date: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  certs: Cert[] = [
    { name: 'Spring Framework 6 & Spring Boot 3', platform: 'Udemy', date: 'dic. 2023' },
    { name: 'Efficient Java Multithreading and Concurrency with Executors', platform: 'Udemy', date: 'abr. 2024' },
    { name: 'DevOps TOTAL: Docker, Kubernetes, Jenkins, AWS, Git & Más', platform: 'Udemy', date: 'abr. 2024' },
    { name: 'Apache Kafka Series — Learn Apache Kafka for Beginners v3', platform: 'Udemy', date: 'abr. 2024' },
    { name: 'Docker, de principiante a experto', platform: 'Udemy', date: 'abr. 2024' },
    { name: 'GIT+GitHub: Todo un sistema de control de versiones', platform: 'Udemy', date: 'may. 2023' },
    { name: 'Complete Guide to Elasticsearch', platform: 'Udemy', date: 'may. 2020' },
    { name: 'Test unitario con JUnit y Mockito en Spring', platform: 'Udemy', date: 'mar. 2021' },
    { name: 'Docker, Swarm y Kubernetes', platform: 'Udemy', date: 'jun. 2020' },
    { name: 'Learn Apache Kafka', platform: 'Udemy', date: 'may. 2020' },
    { name: 'Spring Framework 5', platform: 'Udemy', date: 'mar. 2019' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    this.el.nativeElement.querySelectorAll('.fade-up').forEach((el: Element) => observer.observe(el));
  }
}
