const  mongoose = require("mongoose");

const  Assignment = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    classroomID: {
        type: String,
        required: true
    },
    facultyID: {
        type: String,
    }

},{timestamps:true})

module.exports =  new mongoose.model("assignment",Assignment)