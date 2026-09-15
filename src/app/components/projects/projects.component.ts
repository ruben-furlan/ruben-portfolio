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
  /** Cómo se usó la IA en el proyecto; si existe, se destaca en la tarjeta. */
  ai?: string[];
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
      image: 'projects/cbm-fisioterapia.png',
    },
    {
      name: 'Marü Bakery — tienda online',
      period: 'Jun 2026 — Jul 2026',
      description:
        'Web y panel de administración para una pastelería artesanal de Montevideo. Los clientes arman su pedido desde la vitrina y la dueña gestiona productos, textos, envíos y pedidos sin tocar código. Desarrollada de principio a fin trabajando con agentes de IA.',
      stack: ['Angular 20', 'Tailwind CSS 4', 'Supabase', 'Netlify', 'Resend', 'Claude Code'],
      features: [
        'Carrito de pedidos',
        'Panel de administración',
        'Zonas de envío con coste',
        'Avisos por email automáticos',
        'Contenido editable',
        'Accesibilidad AA',
      ],
      ai: [
        'Repositorio preparado para Claude Code, OpenCode y Codex con contexto compartido del proyecto',
        'Subagentes especializados en revisión de código, Supabase y diseño de marca',
        'Skills propias para crear componentes, migrar la base de datos y revisar antes de desplegar',
        'Hooks y MCP: formateo automático, bloqueo de comandos peligrosos, docs actualizadas y navegador real',
      ],
      url: 'https://marubakery.casa',
      urlLabel: 'marubakery.casa',
      image: 'projects/marubakery.png',
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
