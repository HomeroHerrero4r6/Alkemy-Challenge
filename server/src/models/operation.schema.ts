import {Schema,model} from "mongoose"
const OperationSchema = new Schema(
    {
        concept:{
            type:String
        },
        amount:{
            type:Number,
            require:true
        },
        date:{
            type:Date
        },
        type: {
            type: String,
            enum : ["Services","Health","Food","Taxes"],
            default: "Services"
        },
    }
)
const OperationModel = model("operations",OperationSchema)
export default OperationModel