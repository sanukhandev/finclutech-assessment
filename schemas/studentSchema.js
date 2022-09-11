const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
        ID: {type: Number, required: true},
        LastName: {type: String, required: true},
        FirstName: {type: String, required: true},
        City: {type: String, required: true},
        State: {type: String, required: true},
        Gender: {type: String, required: true},
        StudentStatus: {type: String, required: true},
        Major: {type: String, required: true},
        Country: {type: String, required: true},
        Age: {type: String, required: true},
        SAT: {type: String, required: true},
        Grade: {type: String, required: false},
        Height: {type: String, required: true}
    }
)
studentSchema.index({ID: 1}, {unique: true});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
