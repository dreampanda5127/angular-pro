import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrl: './man.component.scss'
})
export class ManComponent {
  @Input() color: any = '#4EC040';
}
