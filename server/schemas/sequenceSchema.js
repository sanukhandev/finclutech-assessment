const mongoose = require("mongoose");

const sequenceSchema = mongoose.Schema({
    nextStudentId: Number
});

const Sequence = mongoose.model("Sequence", sequenceSchema);

module.exports = Sequence;

