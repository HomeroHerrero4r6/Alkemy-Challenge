import OperationModel from "../models/operation.schema";
import { OperationInterface } from "../types/operation.type";

const registerOperation =async (operation:OperationInterface) => {
    const response = await OperationModel.create(operation)
    return response;
};

const getAmountOperation = async (id:string) => {
    console.log(id)
    const response = await OperationModel.findOne({_id:id})
    console.log(response)
    return response
}

export {registerOperation,getAmountOperation};