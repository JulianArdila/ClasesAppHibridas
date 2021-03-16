import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSdkPageRoutingModule } from './map-sdk-routing.module';

import { MapSdkPage } from './map-sdk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSdkPageRoutingModule
  ],
  declarations: [MapSdkPage]
})
export class MapSdkPageModule {}
