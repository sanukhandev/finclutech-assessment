const {respond} = require("./responseUtil");
const {verifyJWT} = require("./JWTutil");

const isAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
        try {
            const decoded = verifyJWT(token);
            req.user = decoded;
            next();
        } catch (err) {
            console.log(err);
            respond(res, 401, null, 'Invalid token');
        }
    }else{
        respond(res, 401, null, 'No token provided');
    }
}

module.exports = {
    isAuth
}
