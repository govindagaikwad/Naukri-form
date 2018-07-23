// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //firebase initialize
  firebase:{
    apiKey: "AIzaSyCnIDH0ovt998YpkM0keMPaUlriXbF8KsI",
    authDomain: "naukriform-49dee.firebaseapp.com",
    databaseURL: "https://naukriform-49dee.firebaseio.com",
    projectId: "naukriform-49dee",
    storageBucket: "naukriform-49dee.appspot.com",
    messagingSenderId: "1295850634"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
