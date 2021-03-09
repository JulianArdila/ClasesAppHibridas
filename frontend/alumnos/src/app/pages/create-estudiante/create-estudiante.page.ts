import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.page.html',
  styleUrls: ['./create-estudiante.page.scss'],
})
export class CreateEstudiantePage implements OnInit {
  nombre:string;
  codigo:number;
  fecha_nacimiento:string;
  curso:number;
  statura:number;
  constructor(
    private service: AlumnosService,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  saveEstudiante(formData) {
    if (formData.valid) {
      this.service.createAlumnos(formData.value).then(
        data => {
          this.navController.navigateBack('/estudiantes');
        }
      ).catch(
        (err) => {
          console.error(err);
        }
      );
      console.log("Valido");
    } else {
      console.log("No valido");
    }
    console.log(formData);
  }

}
