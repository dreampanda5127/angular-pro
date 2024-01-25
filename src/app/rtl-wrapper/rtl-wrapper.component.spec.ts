import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlWrapperComponent } from './rtl-wrapper.component';

describe('RtlWrapperComponent', () => {
  let component: RtlWrapperComponent;
  let fixture: ComponentFixture<RtlWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtlWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RtlWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
