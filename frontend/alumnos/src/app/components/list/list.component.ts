import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  
  @Input() alumno;

  constructor() { }

  ngOnInit() {
    console.log(this.alumno)
  }

}
