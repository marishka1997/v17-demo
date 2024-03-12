import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

const DEFAULT_TASKS = [
  'Bug Fix',
  'Code Refactoring',
  'Feature Implementation',
  'Backlog Refinement',
  'Daily Meeting',
];

@Component({
  selector: 'app-manipulating-tasks',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  template: `
    <h1>Manipulating Tasks</h1>

    <form (submit)="addTasks(addTaskInput.value)">
      <input style="margin-right: 10px;" type="text" #addTaskInput />
      <button
        style="background-color: green; color: white; border: none; padding: 5px 10px; font-weight: bold;"
        type="submit"
      >
        Add task

      </button>
    </form>
    <br />
    <div>
      <span style="font-weight: bold;">Filter: </span>
      <input
        type="text"
        #filterTask
        [value]="filter$ | async"
        (input)="filter$.next(filterTask.value)"
      />
    </div>
    <br />
    <button
      style="background-color: red; color: white; border: none; padding: 5px 10px; font-weight: bold;"
      (click)="reset()"
    >
      Reset
    </button>
    <h2>Filtered Tasks</h2>
    <ul>
      @for (task of filteredTasks$ | async; track task) {
      <li>{{ task }}</li>
      }
    </ul>
  `,
})
export class ManipulatingTasksComponent {
  tasks$ = new BehaviorSubject([...DEFAULT_TASKS]);
  filter$ = new BehaviorSubject('');

  filteredTasks$ = combineLatest([this.tasks$, this.filter$]).pipe(
    // TODO 1 How often is the filter triggered on reset()
    tap(([tasks, filter]) => console.log(`tasks=${tasks} filter=${filter}`)),
    map(([tasks, filter]) =>
      tasks.filter((task) => task.toLowerCase().includes(filter.toLowerCase()))
    )
  );

  reset() {
    this.tasks$.next([...DEFAULT_TASKS]);
    this.filter$.next('');
  }

  addTasks(item: string) {
    this.tasks$.next([...this.tasks$.getValue(), item]);
  }
}
