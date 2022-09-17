import express  from "express";
// import mongoose from "mongoose";
import cors from "cors";
const PORT = process.env.PORT || 3000
const app = express();
app.get('/ping',(_req,res)=>{
    console.log('someone pinng here')
    res.send('pong')
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
app.use(express.json)
app.use(cors());