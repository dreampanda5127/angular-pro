import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPanelComponent } from './popup-panel.component';

describe('PopupPanelComponent', () => {
  let component: PopupPanelComponent;
  let fixture: ComponentFixture<PopupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
