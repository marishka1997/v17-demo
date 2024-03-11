import { Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ManipulatingTasksComponent } from './manipulating-tasks/manipulating-tasks.component';
import { SignalsComponent } from './signals/signals.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';

export const routes: Routes = [
  {
    path: 'rxjs-demo',
    component: RxjsComponent,
  },
  {
    path: 'manipulating-tasks',
    component: ManipulatingTasksComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'manipulating-tasks-signals',
    component: ManipulatingTasksComponent,
  },
  {
    path: 'counter-demo',
    component: CounterDemoComponent,
  },
  {
    path: 'tabs-demo',
    component: TabsDemoComponent,
  },
];
