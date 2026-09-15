import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly stack = ['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Go', 'AWS'];

  readonly clients = [
    'ATM Barcelona',
    'PedidosYa',
    'Delivery Hero',
    'Despegar.com',
    'GEOCOM',
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
