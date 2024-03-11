import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDemoComponent } from './tabs-demo.component';

describe('TabsDemoComponent', () => {
  let component: TabsDemoComponent;
  let fixture: ComponentFixture<TabsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
