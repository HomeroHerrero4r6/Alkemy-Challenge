import OperationModel from "../models/operation.schema";
import { OperationInterface } from "../types/operation.type";

const registerOperation =async (operation:OperationInterface) => {
    const response = await OperationModel.create(operation)
    return response;
};

const getAmountOperation = async (id:number) => {
    const response = await OperationModel.findById({id})
    return response
}

export {registerOperation,getAmountOperation};