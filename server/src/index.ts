import "dotenv/config"
import express  from "express";
import cors from "cors";
import dbInit from './db/mongo';
// import mongoose from "mongoose";
const PORT = process.env.PORT || 3000
const app = express();
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
dbInit().then()
app.use(express.json)
app.use(cors());