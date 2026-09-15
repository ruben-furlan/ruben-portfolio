import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  highlights = [
    {
      icon: 'bolt',
      title: 'Alto rendimiento',
      desc: '80% de mejora en el módulo de precios de Despegar.com y migración de Elasticsearch v2.4 → v5.6 en producción, sin downtime.',
    },
    {
      icon: 'nodes',
      title: 'Arquitectura distribuida',
      desc: 'Microservicios con arquitectura hexagonal, DDD y SOLID para plataformas con millones de usuarios en LATAM.',
    },
    {
      icon: 'globe',
      title: 'Experiencia internacional',
      desc: 'Venezuela, Uruguay y España. Equipos remotos, husos horarios distintos y producto en producción todo el tiempo.',
    },
  ];

  languages = ['Español · nativo', 'Inglés · técnico', 'Catalán · básico'];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    this.el.nativeElement.querySelectorAll('.fade-up').forEach((el: Element) => observer.observe(el));
  }
}
