import mongoose from "mongoose";

 // Defining schema

 const EnergySchema = new mongoose.Schema({
    end_year:{
        type:String,
        
    },
    intensity:{
        type:Number
    },
    sector:{
        type:String,

    },
    topic:{
        type:String
    },
    insight:{
        type:String
    },
    url:{
        type:String
    }
    ,
    region:{
        type:String
    },
    start_year:{
        type:String
    },
    impact:{
        type:String
    },
    added:{
        type:String
    },
    published:{
        type:String
    },
    country:{
        type:String
    },
    relevance:{
        type:Number
    },
    pestle:{
        type:String
    },
    source:{
        Type:String
    },
    title:{
        type:String
    },
    likelihood:{
        type:Number
    }
 })

 //defining Model
const EnergyModel = mongoose.model("Energies",EnergySchema )

export default EnergyModel;


