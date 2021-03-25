import { environment } from '../environments/environment';
import { AsyncStorage } from 'react-native';

const {
    appName,
    apiVersion,
    apiHostFull,
    apiHost,
    endpoints,
} = environment;


class SDKService {
    appName = appName;
    apiVersion = apiVersion;
    apiHostFull = apiHostFull;
    apiHost = apiHost;
    endpoints = endpoints;

    async makeEndpointRequest(query, method, data, header) {
        const query_full = this.apiHost + this.apiVersion + query;

        let token = await syncStorage.getItem('token')

        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Funciona en Expo CLI, pero no en React Native CLI
            //'Authorization': `Token ${window.localStorage['token']}`
            'Authorization': token
        };
        var myHeaders = new Headers(headers);

        let props = {
            method: method,
            headers: myHeaders,
        };

        console.log(data)
        if (data) props.body = JSON.stringify(data);
        console.log(JSON.stringify(data))
        const result = await fetch(query_full, props).then(
            (response) => response.json()
        ).catch(
            (error) => console.error(error)
        );
        console.log(result);
        return result;
    }

    // query -> Es una url de nuestros
    async get(query, data) {
        let query_data = ""
        if (data) {
            query_data += "?";
            for (var key in data) {
                query_data += key + "=" + data[key] + "&";
            }
        }
        return await this.makeEndpointRequest(query + query_data, 'GET', null, null);
    }

    // query -> Es una url de nuestros
    async post(query, data) {
        return await this.makeEndpointRequest(query, 'POST', data, null);
    }

}

export default SDKService;