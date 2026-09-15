import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  period: string;
  description: string;
  stack: string[];
  features: string[];
  url?: string;
  urlLabel?: string;
  current?: boolean;
  /** Ruta a la captura del proyecto; sin ella se muestra un placeholder. */
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  projects: Project[] = [
    {
      name: 'CBM Fisioterapia — web corporativa',
      period: 'Mar 2026 — Actualidad',
      current: true,
      description:
        'Desarrollo completo de la web para un centro de fisioterapia y pilates en Terrassa, Barcelona. Del diseño al despliegue: front, base de datos, panel de administración y automatizaciones de email.',
      stack: ['Angular 21', 'Supabase', 'PostgreSQL', 'Netlify', 'Resend'],
      features: [
        'Panel de administración',
        'Bonos regalo animados',
        'Cita previa en 3 pasos',
        'Newsletter y avisos por email',
        'SEO optimizado',
        'Mobile-first',
      ],
      url: 'https://cbmfisioterapia.com',
      urlLabel: 'cbmfisioterapia.com',
      image: '/projects/cbm-fisioterapia.png',
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
