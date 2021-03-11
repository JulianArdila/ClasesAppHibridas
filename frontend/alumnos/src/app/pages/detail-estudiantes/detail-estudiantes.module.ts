import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEstudiantesPageRoutingModule } from './detail-estudiantes-routing.module';

import { DetailEstudiantesPage } from './detail-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEstudiantesPageRoutingModule
  ],
  declarations: [DetailEstudiantesPage]
})
export class DetailEstudiantesPageModule {}
