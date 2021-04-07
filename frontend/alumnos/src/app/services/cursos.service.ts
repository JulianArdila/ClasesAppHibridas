import { Injectable } from '@angular/core';
import { SdkService } from './sdk.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends SdkService {

  async getCursos(data?) {
    return this.get(this.endpoints.cursos.link, data);
  }

}
