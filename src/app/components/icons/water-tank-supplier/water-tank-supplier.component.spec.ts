import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTankSupplierComponent } from './water-tank-supplier.component';

describe('WaterTankSupplierComponent', () => {
  let component: WaterTankSupplierComponent;
  let fixture: ComponentFixture<WaterTankSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterTankSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterTankSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
