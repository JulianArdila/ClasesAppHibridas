import SDKService from './sdk';

export default class ServiceUser extends SDKService {

    async login(data) {
        return await this.post(this.endpoints.user.login, data);
    }

    async register(data) {
        return await this.post(this.endpoints.user.register, data);
    }

}