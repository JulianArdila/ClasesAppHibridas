import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

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
export class SdkService {
  private appName = appName;
  private apiVersion = apiVersion;
  private apiHostFull = apiHostFull;
  private apiHost = apiHost;
  public endpoints = endpoints;

  constructor(
    public http: HttpClient,
    public storage: Storage,
  ) { }

  async makeEndpointRequest<T>(query:string, method:string, data?:any, header?: any) {
    const query_full = this.apiHost + this.apiVersion + query;
    return new Promise<T>(
      (resolve, reject) => {
        console.log(this.http);
        if(data) {
          this.http[method](query_full, data, header).subscribe(
            (res) => {
              resolve(res);
            }, err => {
              console.log(err);
              reject(err);
            }
          );
        } else {
          this.http[method](query_full, header).subscribe(
            (res) => {
              resolve(res);
            }, err => {
              console.log(err);
              reject(err);
            }
          );
        }
      }
    )
  }
  
  public async getHeaders(
    // add?: string | {
    //   [name: string]: string | string[];
    // }
  ) {
    const TOKEN = await this.storage.get('token');
    console.log(TOKEN)
    if (TOKEN) {
      let headers = new HttpHeaders().set('Authorization', `Token ${TOKEN}`)//.set("accept", "text/plain");
      console.log(headers.get("Authorization"));
      console.log(headers);
      return { headers: headers }
    }
    return {}
  }

  // query -> Es una url de nuestros
  async get<T>(query, data) {
    let headers = await this.getHeaders();
    let query_data = ""
    if (data) {
        query_data += "?";
        for (var key in data) {
            query_data += key + "=" + data[key] + "&";
        }
    }
    return await this.makeEndpointRequest(query + query_data, 'get', null, headers);
  }
  
  // query -> Es una url de nuestros
  async post<T>(query, data) {
    let headers = await this.getHeaders();
    console.log('headers', headers);
    return await this.makeEndpointRequest(query, 'post', data, headers);
  }
}
