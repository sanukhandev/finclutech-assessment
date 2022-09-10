const {respond} = require("../util/responseUtil");
const Student = require("../schemas/studentSchema");
const Sequence = require("../schemas/sequenceSchema");

const index = (req, res) => {
    respond(res, 200, {message: 'respond with a resource'});
}

const getAllStudents = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const startIndex = (page - 1) * limit;
    const total = await Student.countDocuments();
    const students = await Student.find().skip(startIndex).limit(limit);
    respond(res, 200, { total, page, limit, students});
}

const getStudentById = async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (student) {
        respond(res, 200, student);
    } else {
        respond(res, 404, null, 'Student not found');
    }
}

const getStudentByStudentId = async (req, res) => {
    const student = await Student.findOne({ID: req.params.id});
    if (student) {
        respond(res, 200, student);
    } else {
        respond(res, 404, null, 'Student not found');
    }
}

const createStudent = async (req, res) => {
    const {_doc:sequence} = await Sequence.findOne();
    const student = new Student(req.body);
    student.ID = sequence.nextStudentId;
    try {
        const savedStudent = await student.save();
        sequence.nextStudentId++;
           await Sequence.updateOne({}, sequence);
        respond(res, 200, savedStudent, 'Student created successfully');
    } catch (err) {
        console.log(err);
        respond(res, 500, null, err);
    }
}

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
        respond(res, 200, updatedStudent, 'Student updated successfully');
    } catch (err) {
        respond(res, 500, null, err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        respond(res, 200, deletedStudent, 'Student deleted successfully');
    } catch (err) {
        respond(res, 500, null, err);
    }
}

const getStudentByFilter = async (req, res) => {
    const filter = req.body;
    const students = await Student.find(filter);
    respond(res, 200, students);
}



module.exports = {
    index,
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentByStudentId,
    getStudentByFilter
}
