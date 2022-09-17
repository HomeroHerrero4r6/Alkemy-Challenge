import "dotenv/config"
import express  from "express";
import cors from "cors";
import operationRoute from "./source/operation/infrastructure/routes/operation.route"
import dbInit from './source/operation/infrastructure/db/mongo';
const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 3000
app.use(operationRoute)
dbInit().then()
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})