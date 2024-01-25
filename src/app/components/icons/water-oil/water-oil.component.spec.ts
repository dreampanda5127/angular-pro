import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterOilComponent } from './water-oil.component';

describe('WaterOilComponent', () => {
  let component: WaterOilComponent;
  let fixture: ComponentFixture<WaterOilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterOilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
