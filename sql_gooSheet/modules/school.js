const mongoose =  require("mongoose")


const schoolSchema = new mongoose.Schema({
    sCity: {
        type:String
    },
    nCityId: {
        type:String
    },
    sGeodistrict:  {
        type:String
    },
    nGeodistrictId:  {
        type:String
    },
    sEdudistrict:  {
        type:String
    },
    nEdudistrictId:  {
        type:String
    },
    sMigzar:  {
        type:String
    },
    nMigzarId:  {
        type:String
    },
    sSchoolName:  {
        type:String
    },
    sSchoolCode:  {
        type:String
    },
    sPikuah:  {
        type:String
    },
    nPikuahId:  {
        type:String
    },
    sOwnership:  {
        type:String
    },
    sSchoolPhone:  {
        type:String
    },
    sSchoolEmail: {
        type:String
    },
    sSchoolStreet:  {
        type:String
    },
    timeStamp:{
        type : Date,
        default: Date.now
    }
})


module.exports = mongoose.model("school", schoolSchema);