const mongoose =  require("mongoose")


const usersSchema = new mongoose.Schema({
    gUserId: {
        type: String,
        required:true
    },
    sTz:String,
    sFirstName: {
        type: String,
        required:true
    },
    sLastName: {
        type: String,
        required:true
    },
    sPhoneNumber:  {
        type: String,
        required:true
    },
    nPhoneState: String,
    dLastPhoneCheckDate: {
        type:Date,
        default:Date.now()
    },
    sEmail: {
        type:String,
        required:true
    },
    sGender:  {
        type: String,
        required:true
    },
    blsActive:String,
    dtCreated:{
        type:Date,
        default: Date.now()
    },
    dtLastModified: {
        type:Date,
        default: Date.now()
    },
    sExternalKey: String
})


module.exports = mongoose.model("user", usersSchema);