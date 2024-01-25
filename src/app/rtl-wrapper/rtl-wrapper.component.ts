import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rtl-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './rtl-wrapper.component.html',
  styleUrl: './rtl-wrapper.component.scss'
})
export class RtlWrapperComponent {

}
