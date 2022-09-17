import express from "express";
import { getOperation, insertOperation } from "../controllers/operation.controller";

const route = express.Router()

route.post(`/operation`,insertOperation)
route.get(`/operation`,getOperation)

export default route