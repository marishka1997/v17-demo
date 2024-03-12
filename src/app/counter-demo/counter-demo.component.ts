import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-counter-demo',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h1>Counter Demo</h1>
    <app-counter [(value)]="counterValue"></app-counter>
    <p>Current value: {{ counterValue }}</p>
    <button
      style="background-color: red; color: white; border: none; padding: 5px 10px; font-weight: bold;"
       (click)="counterValue = 0"
    >
      Reset
    </button>
  `,
})
export class CounterDemoComponent {
  // TODO Rewrite using Signals
  // counterValue = signal(0);
  counterValue = 0;
}
