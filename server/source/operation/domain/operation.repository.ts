import { OperationEntity } from "./operation.entity";

export interface OperationRepository{
    findOperationById(_id:string):Promise<OperationEntity | null>;
    registerOperation(operation:OperationEntity):Promise<OperationEntity|null>;
    listAllOperation():Promise<OperationEntity[]>;
    modifyOperation(_id:string,concept:string,amount:number,categoy:string):Promise<OperationEntity|null>;
    deleteOperation(_id:string):Promise<OperationEntity|null>;
}