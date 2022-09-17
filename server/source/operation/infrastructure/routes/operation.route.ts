import express from "express";
import { OperationUseCase} from "../../application/userCase"
import { OperationController } from "../controllers/operation.controller";
import { MongoRepository } from "../repository/mongo.repository";
const route = express.Router()
const mongoRepository = new MongoRepository
const operationUseCase = new OperationUseCase(mongoRepository)
const operationCtrl = new OperationController(operationUseCase)
route.post(`/operation`, operationCtrl.insertCtrl)
route.get(`/operation`, operationCtrl.getCtrl)
route.get(`/operations`, operationCtrl.getAllCtrl)

export default route