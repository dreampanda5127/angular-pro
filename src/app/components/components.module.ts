import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { ManComponent } from './icons/man/man.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { DrillersComponent } from './icons/drillers/drillers.component';
import { PackageWaterComponent } from './icons/package-water/package-water.component';
import { WaterOilComponent } from './icons/water-oil/water-oil.component';
import { WaterTankSupplierComponent } from './icons/water-tank-supplier/water-tank-supplier.component';


@NgModule({
  declarations: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    WaterOilComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    WaterOilComponent
  ],
  providers: [
    HeaderCarouselComponent,
    UpcomingComponent,
    ManComponent,
    DrillersComponent,
    PackageWaterComponent,
    WaterTankSupplierComponent,
    WaterOilComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
