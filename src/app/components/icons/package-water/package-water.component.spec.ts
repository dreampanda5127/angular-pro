import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWaterComponent } from './package-water.component';

describe('PackageWaterComponent', () => {
  let component: PackageWaterComponent;
  let fixture: ComponentFixture<PackageWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageWaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
