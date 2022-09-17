import {Schema,model} from "mongoose"

const OperationSchema = new Schema(
    {
        concept:{
            type:String
        },
        amount:{

        },
        date:{

        },
        type:{

        }
    }
)
const OperationModel = model("operations",OperationSchema)
export default OperationModel