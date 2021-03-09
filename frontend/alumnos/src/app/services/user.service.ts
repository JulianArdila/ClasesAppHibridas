import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/auth';

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
export class UserService {
  private appName = appName;
  private apiVersion = apiVersion;
  private apiHostFull = apiHostFull;
  private apiHost = apiHost;
  private endpoints = endpoints;

  constructor(
    private http: HttpClient,
  ) { }

  login(data: Login) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiHost + this.apiVersion + this.endpoints.user.login, data).subscribe(
        res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        }
      )
    });
  }
}
