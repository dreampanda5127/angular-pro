import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutsModule, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
