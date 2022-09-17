// import {registerOperation,getAmountOperation} from "../services/operation.service"
import { Request,Response } from "express";
import { getAmountOperation, registerOperation } from "../services/operation.service";

const insertOperation = async ({body}:Request,res:Response) => {
    try{
        console.log(body.concept)
        const operation = await registerOperation({
            concept:body.concept,
            amount:body.amount,
            date:new Date(),
            type:body.type,
        })
        console.log(operation)
        res.send({operation})
    }catch(error){
        res.send({message:error})
    }
    
}
const getOperation = async ({query}:Request,res:Response) =>{
    try{
        const {_id = ''} = query
        const operation = await getAmountOperation(`${_id}`);
        res.send({operation})
    }catch(error){
        console.log(error)
    }
}
export {getOperation,insertOperation};