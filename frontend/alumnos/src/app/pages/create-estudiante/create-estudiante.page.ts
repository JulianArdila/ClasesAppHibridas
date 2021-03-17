import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


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
  estatura:number;
  id: number;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }
  base64Image: string;

  constructor(
    private route: ActivatedRoute,
    private service: AlumnosService,
    private navController: NavController,
    private camera: Camera
  ) {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.id = parseInt(id);
      this.service.getAlumnosId(this.id).then(
        (data) => {
          console.log(data);
          this.nombre = data['nombre']
          this.codigo = data['codigo']
          this.fecha_nacimiento = data['fecha_nacimiento']
          this.curso = data['curso']
          this.estatura = data['estatura']
        }
      ).catch(
        (err) => {
          console.error(err);
        }
      );
    }
  }

  ngOnInit() { }

  tomarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
      console.error(err);
     });
  }

  saveEstudiante(formData) {
    if (formData.valid) {
      if (this.id) {
        //nombre
        //codigo
        //fecha_nacimiento
        //curso
        //estatura
        let body = {};
        if (formData.value['nombre']) body['nombre'] = formData.value['nombre'];
        if (formData.value['codigo']) body['codigo'] = formData.value['codigo'];
        if (formData.value['fecha_nacimiento']) body['fecha_nacimiento'] = formData.value['fecha_nacimiento'];
        if (formData.value['curso']) body['curso'] = formData.value['curso'];
        if (formData.value['estatura']) body['estatura'] = formData.value['estatura'];
        console.log(body)
        console.log(formData.value)
        this.service.editAlumnosId(this.id, body).then(
          data => {
            this.navController.navigateBack('/estudiantes');
          }
        ).catch(
          (err) => {
            console.error(err);
          }
        );
      } else {
        if (this.base64Image) formData.value['imagen'] = this.base64Image;
        this.service.createAlumnos(formData.value).then(
          data => {
            this.navController.navigateBack('/estudiantes');
          }
        ).catch(
          (err) => {
            console.error(err);
          }
        );
      }
      console.log("Valido");
    } else {
      console.log("No valido");
    }
    console.log(formData);
  }

}
