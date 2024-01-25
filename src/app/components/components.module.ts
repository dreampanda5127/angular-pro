import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { ManComponent } from './icons/man/man.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { DrillersComponent } from './icons/drillers/drillers.component';
import { PackageWaterComponent } from './icons/package-water/package-water.component';
import { WaterOilComponent } from './icons/water-oil/water-oil.component';
import { WaterTankSupplierComponent } from './icons/water-tank-supplier/water-tank-supplier.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PopupPanelComponent } from './popup-panel/popup-panel.component';


@NgModule({
  declarations: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    PopupPanelComponent,
    WaterOilComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    PopupPanelComponent,
    WaterOilComponent
  ],
  providers: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    PopupPanelComponent,
    WaterOilComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
