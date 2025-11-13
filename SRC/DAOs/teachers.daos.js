import teachers from  '../models/teachers.js';

const teachersDaos = {};

teachersDaos.getAll = async () => {
    const allteachers = await teachers.find();
    return allteachers;
};

teachersDaos.getOne = async (teacher_id) => {

    const teacherData = await teachers.findOne({teacher_id: teacher_id})
    return teacherData;
};

teachersDaos.insertOne = async (teacherData) => {
    const newTeacher = await new teachers(teacherData).save();
    return newTeacher;

}

teachersDaos.updateOne = async (teacher_id, updateData) => {
    const updatedTeacher = await teachers.findOneAndUpdate(
        {teacher_id: teacher_id},
        updateData
    );
    return updatedTeacher;
}

teachersDaos.deleteOne = async (teacher_id) => {

    const deletedTeacher = await teachers.findOneAndDelete(
        {teacher_id: teacher_id}
    );
    return deletedTeacher;
}

export default teachersDaos