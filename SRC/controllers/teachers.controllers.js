import teachersDaos from "../DAOs/teachers.daos.js";

const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teachersDaos.getAll()
    .then(teachersList => {
        res.json({
            data:teachersList
        })
    })
    .catch(err => {
    res.status(500).json({
        message:"An error has occurred",
        error: err
    });
});
}
teachersControllers.getOne =(req,res)=>{
    teachersDaos.getOne(req.params.teacher_id)
    .then((teachers)=>{
        if(teachers){
           res.json({data:teachers }); 
        }else{
            res.status(404).json({
                message:"Student not found"
            });
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:"An error has occurred",
            error: err
        });
    });
};

teachersControllers.insertOne =async (req,res)=>{
    teachersDaos.insertOne(req.body)
    .then((newTeacher)=>{
        res.status(201).json({
            message:"Student created successfully",
            data: newTeacher
        });
    })
    .catch(err=>{
        res.status(500).json({ message:"An error has occurred"});
    });
};

teachersControllers  .updateOne = async (req, res) => {
    teachersDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher) => {
        if (updatedTeacher) {
            res.json({
                message: "Student updated successfully",
                data: updatedTeacher
            });
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
    });
};

teachersControllers.deleteOne = async (req, res) => {
    teachersDaos.deleteOne(req.params.teacher_id)
        .then((deletedTeachers) => {
            if (deletedTeachers) {
                res.json({
                    message: "Student deleted successfully",
                    data: deletedTeachers
                });
            } else {
                res.status(404).json({
                    message: "Student not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
        });
    
};

export default teachersControllers;

