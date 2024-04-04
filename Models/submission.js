const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    assignmentID: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        default: "Not evaluated yet."
    }
});

module.exports = new mongoose.model("Submission",submissionSchema);