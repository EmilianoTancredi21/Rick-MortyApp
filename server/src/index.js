const {server} = require ("./app")
const { conn } = require('./DB_connection');



const PORT = 3001;


try {
   conn.sync({force: true})
     .then(() => {
       server.listen(PORT, () => {
         console.log('Server raised on port: ' + PORT);
       });
     });
 } catch (error) {
   console.error('Unable to sync database:', error);
 }


// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });
