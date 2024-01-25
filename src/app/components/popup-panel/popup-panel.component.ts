import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-panel',
  templateUrl: './popup-panel.component.html',
  styleUrl: './popup-panel.component.scss'
})
export class PopupPanelComponent {
  @Input() type: any = 1;
  @Input() className: any = '';
  @Input() disabled: any = false;
  show: boolean = false;
  setShow(param: any) {
    if(this.disabled) return;
    this.show = param;
  }
  getClass() {
    return this.className + ' ' + (this.show ? ' block': ' hidden');
  }
}
