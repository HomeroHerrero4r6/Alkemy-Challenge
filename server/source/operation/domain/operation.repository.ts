import { OperationEntity } from "./operation.entity";

export interface OperationRepository{
    findOperationById(_id:string):Promise<OperationEntity | null>;
    registerOperation(operation:OperationEntity):Promise<OperationEntity|null>;
    listAllOperation():Promise<OperationEntity[]>;
}