import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBgComponent } from './popup-bg.component';

describe('PopupBgComponent', () => {
  let component: PopupBgComponent;
  let fixture: ComponentFixture<PopupBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
