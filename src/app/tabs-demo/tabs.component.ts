import { Component, ContentChildren, QueryList, computed, inject, input, model } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  template: ` @if(visible()) {
    <div class="tab">
      <h2>{{ title() }}</h2>
      <ng-content></ng-content>
    </div>
    }`,
})

export class TabComponent {
  title = input.required<string>();

  private pane = inject(TabbedPaneComponent);
  visible = computed(() => this.pane.currentTab() === this);
}

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  template: `
    <div class="pane">
      <div class="nav" role="group">
        @for(tab of tabs; track tab) {
        <button
          [class.secondary]="tab !== currentTab()"
          (click)="current.set($index)"
        >
          {{ tab.title() }}
        </button>
        }
      </div>
      <article>
        <ng-content></ng-content>
      </article>
    </div>
  `,
  styles: `
    .pane .nav button {
      cursor: pointer;
      text-decoration: none;
      padding: 10px 20px;
    }

    .pane .nav {
      margin-bottom: 10px;
      width:auto;
    }
  `,
})
export class TabbedPaneComponent {
  current = model(0);

  // TODO: rewrite using contentChildren
  //tabs = contentChildren(TabComponent);
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  currentTab = computed(() => this.tabs.get(this.current()));
}