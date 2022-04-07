/* 
steps to firebase
** 1. create a projecat on console.firebase.google.com
** 2. npm install firebase
** 3.register web app in firebase
** 4.copy firebase init with config from firebasse project settings into a file firebase.init;js
**5.export default app from firebase.init.js
6.**import get auth from firebase/auth and create const auth = getAuth(app) in App.js
7.iimport app firebase init.js into your app.js 
8.Turn on gooogle authentication (firebase > authentication > enable gooogle sing in)
9.create google provider
10.use signInWithPopus and pass auth and provider
11. handle .then (if successful) and catch error (if error)

*/
