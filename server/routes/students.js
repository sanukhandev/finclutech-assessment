const {getAllStudents, createStudent, updateStudent, deleteStudent, getStudentById, getStudentByFilter,
    getStudentByStudentId
} = require("../controller/studentController");
const router = require('express').Router();

router.post('/', getAllStudents);
router.post('/create', createStudent);
router.get('/:id', getStudentById);
router.get('/student-id/:id', getStudentByStudentId);
router.post('/filter', getStudentByFilter);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);


module.exports = router;
