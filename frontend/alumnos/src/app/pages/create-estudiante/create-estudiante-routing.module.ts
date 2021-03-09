import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEstudiantePage } from './create-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEstudiantePageRoutingModule {}
