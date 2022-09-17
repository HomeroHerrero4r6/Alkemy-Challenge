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
        const operations = await OperationModel.find()
        return operations
    }
    async modifyOperation(_id:string,concept:string,amount:number):Promise<any>{
        const operation = await OperationModel.findOneAndUpdate({_id:_id},{
            amount:amount,
            concept:concept
        })
        return operation
    }
    async deleteOperation(_id:string):Promise<any>{
        const operation = await OperationModel.findOneAndDelete({_id:_id})
        return operation
    }
}