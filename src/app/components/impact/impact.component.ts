import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metric {
  value: string;
  label: string;
  accent?: boolean;
}

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss',
})
export class ImpactComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  metrics: Metric[] = [
    { value: '80%', label: 'mejora de rendimiento en Despegar.com', accent: true },
    { value: '10M+', label: 'usuarios impactados en plataformas LATAM' },
    { value: '10+', label: 'años de experiencia backend' },
    { value: '0', label: 'downtime en la migración de Elasticsearch' },
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
