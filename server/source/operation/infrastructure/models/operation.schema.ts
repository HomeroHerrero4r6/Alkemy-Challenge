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
        category: {
            type: String,
            enum : ["Services","Health","Food","Taxes"],
            default: "Services"
        },
        type: {
            type: String,
            enum : ["bills","profit"],
        },
    }
)
const OperationModel = model("operations",OperationSchema)
export default OperationModel