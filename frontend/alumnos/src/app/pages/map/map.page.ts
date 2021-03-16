import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'

declare var google;
/// MAP JS
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
    //this.loadMap()
  }
  
  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
      console.log(coordenadas);
      this.loadMap(coordenadas);
    }).catch((error) => {
      console.error('Error getting location', error);
    });
  }

  loadMap(coordenadas?) {
    var position = { lat: coordenadas.coords.latitude, lng: coordenadas.coords.longitude };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 20
    });
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
  
  }
}
