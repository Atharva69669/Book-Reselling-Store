import mongoose, { Mongoose } from "mongoose";
const WalletSchema = new mongoose.Schema({
    username:{
    type:String,
    ref:"User",
    required:true
    },
    owe:{
     type:Array,
    },
    profit:{
    type:Array
    }

  });

const WalletModel = mongoose.model("Wallet", WalletSchema);
export default WalletModel;