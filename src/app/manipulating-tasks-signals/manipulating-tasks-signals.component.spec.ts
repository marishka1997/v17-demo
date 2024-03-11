import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulatingTasksSignalsComponent } from './manipulating-tasks-signals.component';

describe('ManipulatingTasksSignalsComponent', () => {
  let component: ManipulatingTasksSignalsComponent;
  let fixture: ComponentFixture<ManipulatingTasksSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManipulatingTasksSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManipulatingTasksSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
