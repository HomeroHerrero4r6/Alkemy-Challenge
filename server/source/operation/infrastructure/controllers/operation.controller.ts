// import {registerOperation,getAmountOperation} from "../services/operation.service"
import { Request,Response } from "express";
import { OperationUseCase } from "../../application/userCase";

export class OperationController {
    constructor(private operationUseCase:OperationUseCase){

    }
    public getCtrl = async({query}:Request,res:Response)=>{
        console.log(this)
        const {_id=''} = query;
        const operation = await this.operationUseCase.getOperation(`${_id}`)
        res.send({operation});
    }
    public insertCtrl= async({ body }: Request, res: Response)=>{
        console.log(this)
        const operation = await this.operationUseCase.registerOperation(body)
        res.send({operation});
    }
    public getAllCtrl=async(_req:Request, res: Response)=>{
        console.log(this)
        const operations = await this.operationUseCase.listOperations()
        res.send({operations})
    }

}