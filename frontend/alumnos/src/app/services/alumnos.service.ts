import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { ListAlumnos } from 'src/app/interfaces/alumnos';
const {
  appName,
  apiVersion,
  apiHostFull,
  apiHost,
  endpoints,
} = environment;

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private appName = appName;
  private apiVersion = apiVersion;
  private apiHostFull = apiHostFull;
  private apiHost = apiHost;
  private endpoints = endpoints;

  constructor(
    public http: HttpClient,
    public storage: Storage,
  ) { }


  public async getHeaders(
    // add?: string | {
    //   [name: string]: string | string[];
    // }
  ) {
    const TOKEN = await this.storage.get('token');
    if (TOKEN) {
      let headers = new HttpHeaders(/*add*/).set('Authorization', `Token ${TOKEN}`)//.set("accept", "text/plain");
      console.log(headers.get("Authorization"));
      return { headers: headers }
    }
    return {}
  }

  async getAlumnos<ListAlumnos>(pg:number) {
    let headers = await this.getHeaders();
    let url_data = "?page=" + pg;
    console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + url_data);
    return new Promise<ListAlumnos>(
      (resolve, reject) => {
        this.http.get(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + url_data, headers).subscribe(
          (res: ListAlumnos) => {
            resolve(res);
          }, err => {
            console.log(err);
            reject(err);
          }
        )
      }
    )
  }
  
  async getAlumnosId(id: number) {
    let headers = await this.getHeaders();
    console.log(headers);
    console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
    return new Promise(
      (resolve, reject) => {
        this.http.get(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + id + "/", headers).subscribe(
          res => {
            console.log(resolve);
            resolve(res);
          }, err => {
            console.log(err);
            console.log(reject);
            reject(err);
          }
        )
      }
    )
  }
  
  async editAlumnosId(id: number, body) {
    let headers = await this.getHeaders();
    console.log(headers);
    console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
    return new Promise(
      (resolve, reject) => {
        this.http.patch(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link + id + "/", body, headers).subscribe(
          res => {
            console.log(resolve);
            resolve(res);
          }, err => {
            console.log(err);
            console.log(reject);
            reject(err);
          }
        )
      }
    )
  }

  async createAlumnos(body) {
    let headers = await this.getHeaders();
    console.log(headers);
    console.log(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link);
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.apiHost + this.apiVersion + this.endpoints.estudiantes.link, body, headers).subscribe(
          res => {
            console.log(resolve);
            resolve(res);
          }, err => {
            console.log(err);
            console.log(reject);
            reject(err);
          }
        )
      }
    )
  }

}
