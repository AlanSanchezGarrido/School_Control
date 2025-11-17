import subject from "../models/subject.js";

const subjectDaos = {};

subjectDaos.getAll = async () => {
    const subjects = await subject.find();
    return subjects;
};


subjectDaos.getOne = async (subject_id) => {

    const subjectData = await subject.findOne({subject_id: subject_id})
    return subjectData;
};

subjectDaos.insertOne = async (subjectData) => {
    const newSubject = await new subject(subjectData).save();
    return newSubject;

}

subjectDaos.updateOne = async (subject_id, subjectData) => {
    const updatedTeacher = await subject.findOneAndUpdate(
        {subject_id: subject_id},
        subjectData
    );
    return updatedTeacher;
}

subjectDaos.deleteOne = async (subject_id) => {

    const deletedSubject = await subject.findOneAndDelete(
        {subject_id: subject_id}
    );
    return deletedSubject;
}

export default subjectDaos;
