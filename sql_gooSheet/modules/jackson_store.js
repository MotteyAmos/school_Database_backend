const mongoose =  require("mongoose")


const jacksonStoreSchema = new mongoose.Schema({
    key: {
        type:String,
        required: true
    },
    value: {
        type: String
        
    },
    iv: String,
    tag: String,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("jackson_store", jacksonStoreSchema);