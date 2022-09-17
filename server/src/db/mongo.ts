import { connect } from "mongoose";
const DB_URI = `${process.env.DB_URI}`
const dbInit = async ()=>{
    console.log(DB_URI)
    await connect(DB_URI);
    console.log('DB is Ready')
}
export default dbInit;