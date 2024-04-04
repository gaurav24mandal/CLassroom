const  mongoose = require('mongoose');

const Classroom = new  mongoose.Schema({
    name:{
        type: String,
        required: true ,
    },
    description:{
        type : String,
        required: true,
    },
    facultyId :{
        type:String,
        required: true ,
    }
},{timestamps:true})

module.exports = new mongoose.model("CLassroom",Classroom)