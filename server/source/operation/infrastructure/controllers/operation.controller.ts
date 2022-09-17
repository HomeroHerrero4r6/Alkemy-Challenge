// import {registerOperation,getAmountOperation} from "../services/operation.service"
import { Request,Response } from "express";
import { OperationUseCase } from "../../application/userCase";

export class OperationController {
    constructor(private operationUseCase:OperationUseCase){

    }
    public getCtrl = async({query}:Request,res:Response)=>{
        const {_id=''} = query;
        const operation = await this.operationUseCase.getOperation(`${_id}`)
        res.send({operation});
    }
    public insertCtrl= async({ body }: Request, res: Response)=>{
        const operation = await this.operationUseCase.registerOperation(body)
        res.send({operation});
    }
    public getAllCtrl=async(_req:Request, res: Response)=>{
        const operations = await this.operationUseCase.listOperations()
        res.send({operations})
    }
    public modifyOperationCtrl=async(req:Request, res: Response)=>{
        const id = req.query._id;
        const {concept , amount,category} = req.body
        const operation = await this.operationUseCase.modifyOperation(`${id}`,concept,amount,category)
        res.send({operation})
    }
    public deleteOperationCtrl=async(req:Request, res: Response)=>{
        const id = req.query._id;
        const operation = await this.operationUseCase.deleteOperation(`${id}`)
        res.send({operation})
    }

}