import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSdkPage } from './map-sdk.page';

const routes: Routes = [
  {
    path: '',
    component: MapSdkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSdkPageRoutingModule {}
