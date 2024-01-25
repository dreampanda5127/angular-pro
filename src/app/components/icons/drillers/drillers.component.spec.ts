import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillersComponent } from './drillers.component';

describe('DrillersComponent', () => {
  let component: DrillersComponent;
  let fixture: ComponentFixture<DrillersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrillersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
