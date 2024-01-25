import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-operator2',
  standalone: true,
  imports: [LayoutsModule, ComponentsModule],
  templateUrl: './operator2.component.html',
  styleUrl: './operator2.component.scss'
})
export class Operator2Component {

}
