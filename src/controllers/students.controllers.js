import studentsDaos from "../DAOs/students.daos.js";
const studentsControllers = {};
studentsControllers.getAll = (req,res) =>{
//aqui le vamos a pedir los datos de los estudiantes al dao
studentsDaos.getAll()
    .then(students => {
        res.render( "index.ejs", {students} );

    })
    .catch(err => {
    res.status(500).json({
        message:"An error has occurred",
        error: err
    });
});
//aqui vamos a responder al cliente
};
studentsControllers.getOne =(req,res)=>{
    studentsDaos.getOne(req.params.student_id)
    .then((student)=>{
        if(student){
           res.render("edit.ejs",{student}) 
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

studentsControllers.insertOne = async (req, res) => {
    studentsDaos.insertOne(req.body)
        .then((newStudent) => {
            res.redirect("/api/students/getAll"); 
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        });
}

studentsControllers.updateOne = async (req, res) => {
    studentsDaos.updateOne(req.params.student_id, req.body)
    .then((updatedStudent) => {
        if (updatedStudent) {
            res.redirect("/api/students/getAll");
          
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

studentsControllers.deleteOne = async (req, res) => {
    studentsDaos.deleteOne(req.params.student_id)
        .then((deletedStudent) => {
            if (deletedStudent) {
                res.redirect("/api/students/getAll");
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
export default studentsControllers;
    