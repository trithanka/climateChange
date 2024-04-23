const express=require("express")
const dotenv=require("dotenv");
dotenv.config()
const router = require("./src/Routes/userRoute");
const connect = require("./database");
const logger = require("./utils/logger");
const app=express()

app.use(express.json())
app.use(router)

connect()
app.listen(process.env.PORT,()=>{
    logger.info("app running  on port "+ process.env.PORT);
})

