import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  skillGroups: SkillGroup[] = [
    {
      title: 'Lenguajes & Frameworks',
      skills: ['Java', 'Spring Boot', 'Spring Framework', 'Go', 'Python'],
    },
    {
      title: 'Arquitectura',
      skills: ['Microservicios', 'Hexagonal', 'DDD', 'REST APIs', 'Event-Driven'],
    },
    {
      title: 'Bases de datos',
      skills: ['MySQL', 'MariaDB', 'Cassandra', 'Elasticsearch', 'PostgreSQL'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS EKS', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD', 'Git'],
    },
    {
      title: 'Mensajería',
      skills: ['Apache Kafka', 'RabbitMQ'],
    },
    {
      title: 'Observabilidad & Calidad',
      skills: ['New Relic', 'Datadog', 'TDD', 'BDD', 'JUnit', 'Mockito', 'Agile Scrum'],
    },
    {
      title: 'Seguridad & API',
      skills: ['Spring Security', 'JWT', 'OAuth2', 'Swagger / OpenAPI', 'Maven', 'Gradle'],
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.fade-up').forEach((el: Element) => observer.observe(el));
  }
}
