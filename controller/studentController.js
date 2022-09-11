const {respond} = require("../util/responseUtil");
const Student = require("../schemas/studentSchema");
const Sequence = require("../schemas/sequenceSchema");

const index = (req, res) => {
    respond(res, 200, {message: 'respond with a resource'});
}

const getAllStudents = async (req, res) => {
    const MAX = '5000';
    const MIN = '0';
    const {FirstName, LastName, City, State, Country, Gender, StudentStatus, Major, Age,SAT,Height} = req.body;
    const age = Age.split('-').filter((item) => item !== '');
    const sat = SAT.split('-').filter((item) => item !== '');
    const height = Height.split('-').filter((item) => item !== '');
    const ageFilter = age && age.length > 1? {$gte: age[0] === 'min' ? MIN: age[0], $lte: age[1]==='max' ? MAX : age[1]} : age.length === 1 ?  age[0] : new RegExp('','i');
    const satFilter = sat && sat.length > 1? {$gte: sat[0] === 'min' ? MIN: sat[0], $lte: sat[1]==='max' ? MAX : sat[1]} : sat.length === 1 ?  sat[0] : new RegExp('','i');
    const heightFilter = height && height.length > 1? {$gte: height[0] === 'min' ? MIN: height[0], $lte: height[1]==='max' ? MAX : height[1]} : height.length === 1 ?  height[0] : new RegExp('','i');
    const filter = {
        FirstName: new RegExp(`^${FirstName}`, 'i'),
        LastName: new RegExp(`^${LastName}`, 'i'),
        City: new RegExp(`^${City}`, 'i'),
        State: new RegExp(`^${State}`, 'i'),
        Gender: new RegExp(`^${Gender}`, 'i'),
        StudentStatus: new RegExp(`^${StudentStatus}`, 'i'),
        Major: new RegExp(`^${Major}`, 'i'),
        Country: new RegExp(`^${Country}`, 'i'),
        Age: ageFilter,
        SAT: satFilter,
        Height: heightFilter,

    };
    const isFilterEmpty = Object.values(req.body).every(value => value === '');
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const startIndex = (page - 1) * limit;
    let total =  await Student.countDocuments();
    const students = await Student.find(filter).skip(startIndex).limit(limit);
    total = Math.ceil((isFilterEmpty ? total: students.length) / limit);
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
