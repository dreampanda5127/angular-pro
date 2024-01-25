import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';


@NgModule({
  declarations: [
    HeaderCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderCarouselComponent
  ],
  providers: [
    HeaderCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
