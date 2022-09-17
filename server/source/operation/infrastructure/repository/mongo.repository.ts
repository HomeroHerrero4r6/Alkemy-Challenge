import { OperationEntity } from "../../domain/operation.entity";
import OperationModel from "../models/operation.schema";
import { OperationRepository } from "../../domain/operation.repository";
export class MongoRepository implements OperationRepository{
    async findOperationById(_id:string):Promise<any>{
        const operation = await OperationModel.findOne({_id})
        return operation
    }
    async registerOperation(currentOperation:OperationEntity):Promise<any>{
        const operation = await OperationModel.create(currentOperation)
        return operation
    }
    async listAllOperation():Promise<any>{
        console.log('hola')
        const operations = await OperationModel.find()
        console.log(operations)
        return operations
    }
}