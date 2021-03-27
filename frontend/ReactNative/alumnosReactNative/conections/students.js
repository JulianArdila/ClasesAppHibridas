import SDKService from './sdk';

export default class ServiceStudent extends SDKService {

    async getListStudents(data) {
        return await this.get(this.endpoints.estudiantes.link, data);
    }

    async saveStudent(data) {
        return await this.post(this.endpoints.estudiantes.link, data);
    }

}