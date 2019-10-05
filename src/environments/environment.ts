// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'http://127.0.0.1:8000',
  //apiUrl:'http://localhost/master-dashboard-mhada/public/index.php',
  grant_type:"password",
  client_id: "2",
  client_secret:"vLGdixjn3pvdhnJsr4vOCikZoDMk8ceLyeq70hAB",
  //client_secret:"FPQE8hISq8QyJJZIfxGgEq1GSVMcJVQAbVvXgvwV",
  scope: "*"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
