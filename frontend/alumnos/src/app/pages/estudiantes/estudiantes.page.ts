import { Component, OnInit } from '@angular/core';
import { ListAlumnos } from 'src/app/interfaces/alumnos';
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
  next: boolean = true;
  data = [];
  pg: number = 1;
  // Entrada

  constructor(
    private service: AlumnosService
  ) {
    console.log("Contructor");
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
    this.loadData();
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

  doRefresh(event) {
    console.log(event)
    this.pg = 1;
    console.log(this.pg)
    this.next = true;
    this.loadData();
    if (event) event.target.complete();
  }

  loadData(event?) {
    if (this.next) {
      if (event) this.pg++;
      this.service.getAlumnos(this.pg).then(
        (data: ListAlumnos) => {
          console.log(data);
          if (event) this.data = this.data.concat(data.results);
          else this.data = data.results;
          if(!data.next) this.next = false;
          //for(let alumno of this.data) {
          //  console.log(alumno)
          //}
        }
      );
    }
    if (event) event.target.complete();
  }

}
