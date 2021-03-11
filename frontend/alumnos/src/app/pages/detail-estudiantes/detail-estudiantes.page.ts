import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-detail-estudiantes',
  templateUrl: './detail-estudiantes.page.html',
  styleUrls: ['./detail-estudiantes.page.scss'],
})
export class DetailEstudiantesPage implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private service: AlumnosService,
  ) {
    
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.service.getAlumnosId(parseInt(id)).then(
      data => {
        console.log(data)
        this.data = data
      }
    )
  }

  ngOnInit() {
  }

}
