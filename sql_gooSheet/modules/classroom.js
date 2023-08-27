const mongoose =  require("mongoose")


const classRoomSchema = new mongoose.Schema({
    classroomId: {
        type: String,
        required: true
    },
    school_symbol:{
        type: String,
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    topic_id: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    grade_id:{
        type: String,
        required: true
    },
    grade: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()    
    },
    updated_at:  {
        type: Date,
        default: Date.now()    
    },
    
timeStamp: { type: Date, default: Date.now }
})


module.exports = mongoose.model("classroom", classRoomSchema);