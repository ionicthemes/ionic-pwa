// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'pwa-talk-meetup.firebaseapp.com',
    databaseURL: 'https://pwa-talk-meetup.firebaseio.com',
    projectId: 'pwa-talk-meetup',
    storageBucket: 'pwa-talk-meetup.appspot.com',
    messagingSenderId: '1046539706219',
    appId: "1:1046539706219:web:99d23c26b73cc1aa86f62e"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
