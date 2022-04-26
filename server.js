const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app')

dotenv.config({ path:'./config.env' })


const DB = process.env.DATABASE_URL


mongoose.connect(DB).then(()=>{console.log('db is connected')})

PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is runing on ${PORT}`))
