require('dotenv').config();


const app = require('./src/app.js');



const main = require('./src/services/ai.service.js')


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})



