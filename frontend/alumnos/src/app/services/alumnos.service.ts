import { Injectable } from '@angular/core';
import { ListAlumnos } from 'src/app/interfaces/alumnos';
import { SdkService } from './sdk.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService extends SdkService {

  async getAlumnos<ListAlumnos>(pg:number) {
    return await this.get<ListAlumnos>(this.endpoints.estudiantes.link, {
      page: pg,
      //curso__curso: '6D'
    });
  }
  
  async getAlumnosId(id: number) {
    
    return await this.get<ListAlumnos>(this.endpoints.estudiantes.link, {
      id: id
    });
    //let headers = await this.getHeaders();
    //console.log(headers);
    //console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
    //return new Promise(
    //  (resolve, reject) => {
    //    this.http.get(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + id + "/", headers).subscribe(
    //      res => {
    //        console.log(resolve);
    //        resolve(res);
    //      }, err => {
    //        console.log(err);
    //        console.log(reject);
    //        reject(err);
    //      }
    //    )
    //  }
    //)
  }
  
  async editAlumnosId(id: number, body) {

    return await this.post(this.endpoints.estudiantes.link + id + "/", body);
    //let headers = await this.getHeaders();
    //console.log(headers);
    //console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
    //return new Promise(
    //  (resolve, reject) => {
    //    this.http.patch(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + id + "/", body, headers).subscribe(
    //      res => {
    //        console.log(resolve);
    //        resolve(res);
    //      }, err => {
    //        console.log(err);
    //        console.log(reject);
    //        reject(err);
    //      }
    //    )
    //  }
    //)
  }

  async createAlumnos(body) {
    return await this.post(this.endpoints.estudiantes.link, body);
  }
  //let headers = await this.getHeaders();
  //console.log(headers);
  //console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
  //return new Promise(
  //  (resolve, reject) => {
  //    this.http.post(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link, body, headers).subscribe(
  //      res => {
  //        console.log(resolve);
  //        resolve(res);
  //      }, err => {
  //        console.log(err);
  //        console.log(reject);
  //        reject(err);
  //      }
  //    )
  //  }
  //)

}
