const mongoose =  require("mongoose")


const jacksonIndexSchema = new mongoose.Schema({
id:{
    type: String,
    required:true
},
key:{
    type: String,
    required:true
},
storeKey:{
    type:String,
    required: true
},
timeStamp: { type: Date, default: Date.now }
})


module.exports = mongoose.model("jackson_index", jacksonIndexSchema);