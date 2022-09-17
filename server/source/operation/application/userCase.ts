import { OperationEntity } from "../domain/operation.entity";
import { OperationRepository } from "../domain/operation.repository";
import { OperationValue } from "../domain/operation.value";

export class OperationUseCase{
    constructor(private readonly operationRepository:OperationRepository){

    }
    /**
     * registerOperation
     */
    public async registerOperation({concept,amount,type}:OperationEntity) {
        const operationValue = new OperationValue({concept,amount,type})
        const operationCreated = await this.operationRepository.registerOperation(operationValue)
        return operationCreated
    }
    /**
     * 
     */
    public async getOperation(_id:string) {
        const operation = await this.operationRepository.findOperationById(_id)
        return operation
    }
    public async listOperations() {
        const operations = await this.operationRepository.listAllOperation()
        return operations
    }
    public async modifyOperation(_id:string,concept:string,amount:number,category:string) {
        const operation = await this.operationRepository.modifyOperation(_id,concept,amount,category)
        return operation
    }
    public async deleteOperation(_id:string) {
        const operation = await this.operationRepository.deleteOperation(_id)
        return operation
    }
}