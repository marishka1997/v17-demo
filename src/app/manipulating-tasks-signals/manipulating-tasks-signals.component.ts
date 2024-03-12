import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const DEFAULT_TASKS = [
  'Bug Fix',
  'Code Refactoring',
  'Feature Implementation',
  'Backlog Refinement',
  'Daily Meeting',
];

@Component({
  selector: 'app-manipulating-tasks-signals',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Manipulating Tasks with Signals</h1>

    <form (submit)="addTask(addTaskInput.value)">
      <input style="margin-right: 10px;" type="text" #addTaskInput />
      <button
        style="background-color: green; color: white; border: none; padding: 5px 10px; font-weight: bold;"
        type="submit"
      >
        Add item
      </button>
    </form>

    <div>
      <span style="font-weight: bold;">Filter: </span>
      <input
        type="text"
        #filterTask
        [value]="filter()"
        (input)="filter.set(filterTask.value)"
      />
    </div>
    <button
      style="background-color: red; color: white; border: none; padding: 5px 10px; font-weight: bold;"
       (click)="reset()"
    >
      Reset
    </button>
    <h3>Filtered Items</h3>
    <ul>
      @for (item of filteredTasks(); track item) {
      <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class ManipulatingTasksSignalsComponent {
  tasks = signal([...DEFAULT_TASKS]);
  filter = signal('');

  filteredTasks = computed(() => {
    // TODO 1 How often is the filter triggered on reset()
    console.log(`tasks=${this.tasks()} filter=${this.filter()}`);
    const lowerCaseFilter = this.filter().toLowerCase();
    return this.tasks().filter((task) =>
      task.toLowerCase().includes(lowerCaseFilter)
    );
  });

  reset() {
    this.tasks.set([...DEFAULT_TASKS]);
    this.filter.set('');
  }

  addTask(task: string) {
    this.tasks.update((tasks) => [...tasks, task]);
  }
}
