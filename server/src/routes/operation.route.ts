import { Router } from "express";
import { insertOperation } from "../controllers/operation.controller";

const route = Router()

route.post(`/operation`,insertOperation)

export default route