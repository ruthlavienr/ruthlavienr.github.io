

import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", { useNewUrlParser: true, useUnifiedTopology: true });

const Student = mongoose.model('studentData', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req,res) => {
    res.send('Welcome to the Homepage');
}

const saveStudent = async (req,res) => {
   try{
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ inserted: true });
   } catch (error){
    res.json({ inserted: false });
   }
}

const updateStudent = async (req,res) => {
    await Student.updateOne(
    {fname: "Mary Jane"},
    {$set: {lname: "Parker"}})
}

const removeUser = async (req, res) => {
    await Student.deleteOne({ stdnum: req.body.stdnum})

}

const removeAllUser = async (req, res) => {
    try{    
        await Student.deleteMany({})
        res.json({ deleted: true });
    } catch (error){
        res.json({ deleted: false });
    }
}

const findByUsername = async (req, res) => {
    res.json(await Student.find({ stdnum: req.query.stdnum }));
}

const findAll = async (req, res) => {
    res.json(await Student.find({ }));
}

export {homepage, saveStudent, updateStudent, removeUser, removeAllUser, findByUsername, findAll}
