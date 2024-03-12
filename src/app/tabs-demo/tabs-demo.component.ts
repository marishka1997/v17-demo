import { Component, signal } from '@angular/core';
import { TabbedPaneComponent, TabComponent } from './tabs.component';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [TabbedPaneComponent, TabComponent],
  template: `
    <h1>Tabs Demo</h1>

    <div class="pane-container">
      <app-tabbed-pane [(current)]="current">
        <app-tabs title="Angular">
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript. Angular is written in
          TypeScript. It implements core and optional functionality as a set of
          TypeScript libraries that you import into your applications.
        </app-tabs>
        <app-tabs title="React">
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies.
        </app-tabs>
        <app-tabs title="Vue">
          Vue (pronounced like "view") is a JavaScript framework for
          building user interfaces. It builds on top of standard HTML, CSS, and
          JavaScript and provides a declarative and component-based programming
          model that helps you efficiently develop user interfaces, be they
          simple or complex.
        </app-tabs>
      </app-tabbed-pane>

      <p class="current-info">Current: {{ current() }}</p>
    </div>
  `,
  styles: `  .pane-container {
      max-width: 600px;
    }
    .current-info {
      margin-top: 20px;
    }`,
})
export class TabsDemoComponent {
  current = signal(0);
}
