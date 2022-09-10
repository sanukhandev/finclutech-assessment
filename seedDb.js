const mongoose = require("mongoose");
const config = require("./config");
const Student = require("./schemas/studentSchema");
const data = require("./data/students.json");
const Sequence = require("./schemas/sequenceSchema");


mongoose.connect(
    config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const seedDb = async () => {
    await Student.deleteMany({});
    await Student.insertMany(data);
    console.log("Database seeded");
    await Sequence.deleteMany({});
    await new Sequence({nextStudentId: 50}).save();
    process.exit();
}

seedDb();
