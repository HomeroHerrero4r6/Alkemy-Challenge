import { OperationEntity } from "./operation.entity";

export class OperationValue implements OperationEntity{
    concept: string;
    amount: number;
    type: string;
    constructor({concept,amount,type}:{concept:string;amount:number;type:string}){
        this.concept = concept
        this.amount = amount
        this.type = type
    }
}