const {index, createUser, login} = require("../controller/userController");
const router = require('express').Router();

router.get('/', index);
router.post('/create-user', createUser);
router.post('/login', login);

module.exports = router;
