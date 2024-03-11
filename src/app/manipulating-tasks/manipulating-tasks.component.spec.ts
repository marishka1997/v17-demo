import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulatingTasksComponent } from './manipulating-tasks.component';

describe('ManipulatingTasksComponent', () => {
  let component: ManipulatingTasksComponent;
  let fixture: ComponentFixture<ManipulatingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManipulatingTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManipulatingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
