import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `<button
      style="background-color: green; color: white; border: none; margin-right: 5px; padding: 5px 10px; font-weight: bold;"
      (click)="increment()"
    >
      Increment
    </button>
    <button
      style="background-color: green; color: white; border: none; margin-right: 5px; padding: 5px 10px; font-weight: bold;"
      (click)="decrement()"
    >
      Decrement
    </button>

    <br>
    <br>
    <span>{{ label }}</span>
    <span>{{ value }}</span>`,
})
export class CounterComponent {
  // TODO 1 Rewrite using input()
  //label = input('Counter')
  @Input()
  label = 'Counter: ';

  // TODO 3 Rewrite using model()
  //value = model(0);
  @Input()
  value = 0;

  // TODO 2 Rewrite using output()
  //valueChange = output<number>();
  @Output()
  valueChange = new EventEmitter<number>();

  decrement() {
    // TODO
    // this.value.update(x => x - 1);
    this.value--;
    this.valueChange.emit(this.value);
  }

  increment() {
    // TODO
    // this.value.update(x => x + 1);
    this.value++;
    this.valueChange.emit(this.value);
  }
}
