import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEstudiantePageRoutingModule } from './create-estudiante-routing.module';

import { CreateEstudiantePage } from './create-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEstudiantePageRoutingModule
  ],
  declarations: [CreateEstudiantePage]
})
export class CreateEstudiantePageModule {}
