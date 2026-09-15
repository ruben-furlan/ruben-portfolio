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
      role: 'Senior Software Engineer Backend (Java)',
      period: 'Mayo 2024 — Actualidad',
      location: 'Barcelona, España · Remoto',
      url: 'https://k-lagan.com',
      description:
        'Sistemas de pago de misión crítica para la Autoritat del Transport Metropolità de Barcelona (ATM Barcelona). Diseño y desarrollo de soluciones backend basadas en microservicios, cuidando la calidad, la seguridad y el rendimiento, y aportando propuestas de mejora en arquitectura, integración y comunicación entre servicios.',
      stack: ['Java', 'Spring Boot', 'Microservicios', 'gRPC', 'Python', 'Elastic Stack', 'Kubernetes'],
      current: true,
      achievements: [
        'Diseño y desarrollo de los sistemas de pago de ATM Barcelona, integrando múltiples proveedores de procesamiento y aplicando el patrón Strategy para el recálculo de cargos por viaje',
        'Desarrollé desde cero un microservicio con gRPC que mantiene actualizados en tiempo real los paquetes, agencias y estaciones de toda la red de transporte metropolitano',
        'Creé herramientas internas en Python (acceso SSH centralizado a los entornos y seguimiento automático de releases), mejorando la agilidad y la trazabilidad del equipo',
        'Observabilidad con Elastic Stack sobre Elastic Cloud (GCP) y refuerzo de seguridad (DevSecOps) actualizando dependencias entre sprints',
      ],
    },
    {
      company: 'PedidosYa · Delivery Hero SE',
      role: 'Software Engineer Backend (Go)',
      period: 'Enero 2024 — Abril 2024',
      location: 'Montevideo, Uruguay · Remoto',
      url: 'https://www.pedidosya.com/',
      description:
        'Desarrollo backend en una plataforma de delivery de alto tráfico con operación en LATAM. Trabajé en PedidosYa Plus, el programa de suscripción de beneficios: servicios para gestión de suscripciones, beneficios y procesamiento de pagos, integrados con sistemas internos y externos.',
      stack: ['Go', 'AWS', 'Microservicios', 'Kafka'],
      current: false,
      achievements: [
        'Participación en las guardias on-call de servicios de alta disponibilidad',
        'Integración de PedidosYa Plus con múltiples sistemas de pago en tiempo real',
        'Consistencia de datos en el sistema de suscripciones a escala',
      ],
    },
    {
      company: 'Despegar.com',
      role: 'Software Engineer III (Java)',
      period: 'Octubre 2018 — Noviembre 2023',
      location: 'Montevideo, Uruguay · Remoto/Híbrido',
      url: 'https://www.despegar.com.ar/',
      description:
        'Desarrollo del módulo PriceBox y orquestación del proceso de compra en una de las mayores agencias de viajes online de LATAM. Aplicación de DDD, TDD y SOLID en una arquitectura distribuida basada en microservicios.',
      stack: ['Java', 'Spring Boot', 'Kafka', 'Elasticsearch', 'DDD', 'Microservicios'],
      current: false,
      achievements: [
        'Refactoricé el modelo de precios y medios de pago, mejorando el rendimiento un 80%',
        'Diseñé y ejecuté la migración de Elasticsearch v2.4 → v5.6 sin downtime, ante un alto volumen de consultas en LATAM',
        'Lideré funcionalidades clave del negocio (cambio de hotel, seguro de autos y seguro de vuelo), coordinando equipos multidisciplinarios',
        'Migré una aplicación legacy a una arquitectura moderna, aumentando la eficiencia y reduciendo los costes de mantenimiento',
      ],
    },
    {
      company: 'GEOCOM Uruguay S.A.',
      role: 'Software Developer (Java)',
      period: 'Agosto 2017 — Octubre 2018',
      location: 'Montevideo, Uruguay · Presencial',
      url: 'https://www.geocom.com.uy',
      description:
        'Desarrollo de aplicaciones Java siguiendo buenas prácticas de POO y patrones de diseño.',
      stack: ['Java', 'Spring', 'Hibernate', 'JUnit'],
      current: false,
      achievements: [
        'Implementé frameworks clave (Spring, Hibernate, JUnit) para mejorar el rendimiento, la escalabilidad y la mantenibilidad',
      ],
    },
    {
      company: 'Consis International',
      role: 'Software Developer (Java)',
      period: 'Septiembre 2016 — Julio 2017',
      location: 'Caracas, Venezuela · Presencial',
      url: 'https://www.consisint.com',
      description:
        'Soporte, desarrollo y mantenimiento de productos del área de seguros.',
      stack: ['Java'],
      current: false,
      achievements: [
        'Soporte y mantenimiento de productos de seguros con un 95% de satisfacción de cliente',
        'Aporte a la definición de la arquitectura del sistema',
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
