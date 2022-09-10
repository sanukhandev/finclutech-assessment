const User = require("../schemas/userSchema");
const {encrypt, compare} = require("../util/passwordHash");
const {respond} = require("../util/responseUtil");
const {createJWT} = require("../util/JWTutil");

const index = (req, res, next) => {
    res.json({message: 'respond with a resource'});
}

const createUser = async (req, res, next) => {
const {name, email, password} = req.body;
    const user = new User({name, email, password: encrypt(password)});
    try {
        const savedUser = await user.save();
        respond(res, 200, savedUser, 'User created successfully');
    } catch (err) {
        respond(res, 500, null, err);
    }

}

const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (user && compare(password, user.password)) {
            let {password, ...userWithoutPassword} = user.toObject();
            userWithoutPassword.token = createJWT(userWithoutPassword);
            respond(res, 200, userWithoutPassword, 'Login successful');
        } else {
            respond(res, 401, null, 'Login failed, check your credentials');
        }
    } catch (err) {
        console.log(err);
        respond(res, 500, null, err);
    }
}


module.exports = {
    index,
    createUser,
    login
}
