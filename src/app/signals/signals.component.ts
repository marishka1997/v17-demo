import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <h1 style="color: darkred;">Signals</h1>

    <!-- TODO 2b read signal -->
    <p style="color: chocolate;">Counter: {{ counter() }}</p>
    <!-- <p>Counter: 0</p> -->
    <!-- TODO 6 read computed signal -->
    <p style='color: chocolate;'>Multiple of 5: {{ isMultipleOf5() }}</p>
    <!-- <p>Multiple of 5: ???</p> -->

    <button
      style="background-color: green; color: black; border: none; padding: 5px 10px; margin-right: 10px; font-weight: bold;"
      (click)="increment()"
    >
      Increment
    </button>
    <button
      style="background-color: green; color: black; border: none; padding: 5px 10px;  margin-right: 10px; font-weight: bold;"
      (click)="reset()"
    >
      Reset
    </button>
    <button
      style="background-color: yellow; color: black; border: none; padding: 5px 10px; font-weight: bold;"
      (click)="log()"
    >
      Log
    </button>
  `,
})
export class SignalsComponent {
  // TODO 1 create signal
  counter = signal(0);

  // TODO 5 computed signal
  isMultipleOf5 = computed(() => this.counter() % 5 === 0);

  constructor() {
    // TODO 7 side effects
    effect(() => console.log('Is multiple of 5: ' + this.isMultipleOf5()));
  }

  reset() {
    // TODO 3 set value
    this.counter.set(0);
  }

  increment() {
    // TODO 4 update value
    this.counter.update((value) => value + 1);
  }

  log() {
    // TODO 2a read current value
    console.log(this.counter());
  }
}
