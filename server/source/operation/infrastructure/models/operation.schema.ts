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
            enum : ["bills","profit"],
        },
    }
)
const OperationModel = model("operations",OperationSchema)
export default OperationModel