import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidePopupComponent } from './side-popup/side-popup.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidePopupComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidePopupComponent,
    NavbarComponent
  ],
  providers: [
    HeaderComponent,
    FooterComponent,
    SidePopupComponent,
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
