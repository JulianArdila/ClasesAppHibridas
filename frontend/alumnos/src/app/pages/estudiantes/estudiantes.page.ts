import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  data:any; 
  // Entrada

  constructor(
    private service: AlumnosService
  ) {
    console.log("Contructor");
    this.service.getAlumnos().then(
      (data) => {
        console.log(data);
        this.data = data;
        for(let alumno of this.data) {
          console.log(alumno)
        }
      }
    );
  }
  /*
  async ngOnInit() {

    data = await this.service.getAlumnos();
    console.log(data);
    console.log("ngOnInit");
  }
  */

  ngOnInit() {
    console.log("ngOnInit");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");  
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");  
  }

  ionViewWillEnter(){
    console.log("ionViewDidLoad");
  }

  // Salida

  ionViewCanLeave(){
    console.log("ionViewCanLeave");   
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");   
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");   
  }


}
