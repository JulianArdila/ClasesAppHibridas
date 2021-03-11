import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEstudiantesPage } from './detail-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEstudiantesPageRoutingModule {}
