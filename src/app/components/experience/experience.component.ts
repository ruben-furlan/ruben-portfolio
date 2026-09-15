import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  current?: boolean;
  url?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  experiences: Experience[] = [
    {
      company: 'K-LAGAN',
      role: 'Java Senior Software Engineer Backend',
      period: 'Mayo 2024 — Actualidad',
      location: 'Barcelona, España · Remoto',
      url: 'https://k-lagan.com',
      description:
        'Sistemas de pago para la Autoritat del Transport Metropolità de Barcelona (ATM Barcelona). Diseño y desarrollo de soluciones backend escalables basadas en microservicios, asegurando calidad, seguridad y rendimiento del sistema. Participación en instancias de definición técnica, aportando propuestas de mejora en arquitectura, integración y comunicación entre servicios.',
      stack: ['Java', 'Spring Boot', 'Microservicios', 'REST APIs', 'Kubernetes'],
      current: true,
      achievements: [
        'Sistemas de pago críticos para ATM Barcelona cubriendo toda la red de transporte metropolitano',
        'Propuestas de mejora en arquitectura de microservicios adoptadas por el equipo técnico',
      ],
    },
    {
      company: 'PedidosYa · Delivery Hero SE',
      role: 'Go Software Engineer Backend',
      period: 'Enero 2024 — Abril 2024',
      location: 'Montevideo, Uruguay · Remoto',
      url: 'https://www.pedidosya.com/',
      description:
        'Desarrollo de PedidosYa Plus, programa de suscripción de beneficios. Diseño y mantenimiento de servicios backend para gestión de suscripciones, beneficios y procesamiento de pagos. Integración con sistemas internos y externos garantizando consistencia de datos en tiempo real.',
      stack: ['Go', 'AWS', 'Microservicios', 'Kafka'],
      current: false,
      achievements: [
        'Integración de PedidosYa Plus con múltiples sistemas de pago en tiempo real',
        'Garantía de consistencia de datos en sistema de suscripciones a escala',
      ],
    },
    {
      company: 'Despegar.com',
      role: 'Java Software Engineer III → II → I',
      period: 'Septiembre 2020 — Noviembre 2023',
      location: 'Montevideo, Uruguay · Remoto/Híbrido',
      url: 'https://www.despegar.com.ar/',
      description:
        'Desarrollo del módulo PriceBox y orquestación del proceso de compra. Re-factorización de la aplicación de precios mejorando rendimiento en un 80%. Migración estratégica de Elasticsearch de v2.4 a v5.6. Liderazgo técnico en módulos de hotel, seguro de autos y vuelo. Aplicación de DDD, TDD, SOLID en arquitectura distribuida basada en microservicios.',
      stack: ['Java', 'Spring Boot', 'Kafka', 'Elasticsearch', 'DDD', 'Microservicios'],
      current: false,
      achievements: [
        'Re-factoricé el modelo de precios mejorando el rendimiento un 80%',
        'Migración de Elasticsearch v2.4 → v5.6 sin downtime en producción',
        'Liderazgo técnico en módulos de hotel, seguro de autos y vuelo',
      ],
    },
    {
      company: 'GEOCOM Uruguay S.A.',
      role: 'Java Software Developer III',
      period: 'Agosto 2017 — Octubre 2018',
      location: 'Montevideo, Uruguay · Presencial',
      url: 'https://www.geocom.com.uy',
      description:
        'Diseño y desarrollo de aplicaciones Java de alta calidad siguiendo mejores prácticas de POO y patrones de diseño.',
      stack: ['Java', 'Hibernate'],
      current: false,
    },
    {
      company: 'Consis International',
      role: 'Java Software Developer II → I',
      period: 'Septiembre 2016 — Julio 2017',
      location: 'Caracas, Venezuela · Presencial',
      url: 'https://www.consisint.com',
      description:
        'Desarrollo y mantenimiento de producto en el área de seguros. Análisis de requisitos y definición de arquitectura de software.',
      stack: ['Java'],
      current: false,
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
