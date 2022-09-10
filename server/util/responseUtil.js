
const respond = (res, status, data, message) => {
    res.status(status).json({
        data,
        message
    });
}

module.exports = {
    respond
}
