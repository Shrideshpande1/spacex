const mongoose=require ("mongoose")

const gameSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please Enter product Description"],
      },
    image:{
        type: String,
       
    },
    place:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
   
    date:{
type:Date,
required: true,
    },
    starttime:{
        type:Date
    },
     
endtime:{
        type:Date
    },
    limit:{
        type: Number,
        required: true,
    },
    players:[
       {
          name: {type:String}
        }
    ]
     
      
})


module.exports = mongoose.model("games", gameSchema);
