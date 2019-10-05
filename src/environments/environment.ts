// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Antony
  apiUrl:'http://localhost:8050',
  //apiUrl:'http://localhost/master-dashboard-mhada/public/index.php',
  grant_type:"password",
  client_id: "2",
  //client_secret:"vLGdixjn3pvdhnJsr4vOCikZoDMk8ceLyeq70hAB",
  //client_secret:"FPQE8hISq8QyJJZIfxGgEq1GSVMcJVQAbVvXgvwV",
  //Antony
  client_secret:"cRpgDhHlOn7KATQs2dhqKly8Mz1a2R8XqMyQq3Ta",
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
