import Students from "../models/Students.js";
const studentsDaos = {};
//metodo que tiene que devolver todos los estudiantes
studentsDaos.getAll = async () =>{
   //aqui le voy a pedir paro al modelo de mongoose
   //para extraer los estudiantes de mi cluster
   const students = await Students.find();
   return students;

}
//metodo que tiene que devolver un estudiante por su id
studentsDaos.getOne = async (student_id) =>{
   const student = await Students.findOne({Student_id: student_id});
   return student;
};

studentsDaos.insertOne = async (studentData) => {
   const newStudent = await Students.create(studentData); 
   return newStudent;
};

studentsDaos.updateOne = async (student_id, updateData) => {
  const updatedStudent = await Students.findOneAndUpdate(
  {Student_id: student_id},
  updateData
  );
  return updatedStudent;
};  
studentsDaos.deleteOne = async (student_id) => {
    const deleteStudent = await Students.findOneAndDelete({Student_id:student_id});
    return deleteStudent;
}

export default studentsDaos;


