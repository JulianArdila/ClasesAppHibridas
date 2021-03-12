import { Component } from '@angular/core';
import { ListAlumnos } from 'src/app/interfaces/alumnos';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = "";
  color = "gris";
  edad = 15;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  next: boolean = true;
  data = [];
  pg: number = 1;

  // Entranda Inicial o Primaria

  constructor(
    private service: AlumnosService
  ) {
    console.log("Contructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.loadData();
  }

  // Entranda Constante

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  // Entro

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }
  // Salida

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ronronear() {
    return " esta ronroneando";
  }
  /*
    def __str__(self):
        return "Gato " + self.nombre
  */

  loadData(event?) {
    if (this.next) {
      if (event) this.pg++;
      this.service.getAlumnos(this.pg).then(
        (data: ListAlumnos) => {
          console.log(data);
          if (event) this.data = this.data.concat(data.results);
          else this.data = data.results;
          if (!data.next) this.next = false;
          //for(let alumno of this.data) {
          //  console.log(alumno)
          //}
        }
      );
    }
    if (event) event.target.complete();
  }
}
