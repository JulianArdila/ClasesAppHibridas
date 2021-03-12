// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Estudiantes',
  apiVersion: 'v1',
  apiHostFull: 'http://localhost:8000',
  apiHost: 'http://localhost:8000/api/',
  //apiHostFull: 'http://192.168.20.21:7000',
  //apiHost: 'http://192.168.20.21:7000/api/',
  //apiHostFull: 'https://2932ee6ac897.ngrok.io',
  //apiHost: 'https://2932ee6ac897.ngrok.io/api/',
  endpoints: {
    estudiantes: {
      link: '/alumnos/',
    },
    user: {
      login: '/auth/login/',
      register: '/user/'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
