import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  skills: { name: string; accent?: boolean }[];
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

  readonly featured = [
    { name: 'Java', note: '10+ años' },
    { name: 'Spring Boot', note: 'microservicios' },
    { name: 'Kafka', note: 'event-driven' },
    { name: 'Kubernetes', note: 'AWS EKS' },
    { name: 'Elasticsearch', note: 'v2.4 → v5.6' },
  ];

  skillGroups: SkillGroup[] = [
    {
      title: 'Lenguajes & Frameworks',
      skills: [
        { name: 'Java', accent: true },
        { name: 'Spring Boot', accent: true },
        { name: 'Spring Framework' },
        { name: 'Go' },
        { name: 'Python' },
      ],
    },
    {
      title: 'Arquitectura',
      skills: [
        { name: 'Microservicios', accent: true },
        { name: 'Hexagonal' },
        { name: 'DDD' },
        { name: 'REST APIs' },
        { name: 'Event-Driven' },
      ],
    },
    {
      title: 'Bases de datos',
      skills: [
        { name: 'MySQL' },
        { name: 'MariaDB' },
        { name: 'Cassandra' },
        { name: 'Elasticsearch', accent: true },
        { name: 'PostgreSQL' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS EKS', accent: true },
        { name: 'Kubernetes' },
        { name: 'Docker' },
        { name: 'Jenkins' },
        { name: 'CI/CD' },
        { name: 'Git' },
      ],
    },
    {
      title: 'Mensajería',
      skills: [
        { name: 'Apache Kafka', accent: true },
        { name: 'RabbitMQ' },
      ],
    },
    {
      title: 'Observabilidad & Calidad',
      skills: [
        { name: 'New Relic' },
        { name: 'Datadog' },
        { name: 'TDD' },
        { name: 'BDD' },
        { name: 'JUnit' },
        { name: 'Mockito' },
        { name: 'Agile Scrum' },
      ],
    },
    {
      title: 'Seguridad & API',
      skills: [
        { name: 'Spring Security', accent: true },
        { name: 'JWT' },
        { name: 'OAuth2' },
        { name: 'Swagger / OpenAPI' },
        { name: 'Maven' },
        { name: 'Gradle' },
      ],
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
