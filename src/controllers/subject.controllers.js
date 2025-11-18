import subjectDaos from "../DAOs/subject.daos.js";
const subjectControllers = {};

subjectControllers.getAll = (req, res) => {
    subjectDaos.getAll()
    .then(subjectList => {
        res.render( "teachers.ejs", {students} );
    })
    .catch(err => {
    res.status(500).json({
        message:"An error has occurred",
        error: err
    });
});
}
subjectControllers.getOne =(req,res)=>{
    subjectDaos.getOne(req.params.subject_id)
    .then((subject)=>{
        if(subject){
           res.json({data:subject }); 
        }else{
            res.status(404).json({
                message:"subject not found"
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

subjectControllers.insertOne =async (req,res)=>{
    subjectDaos.insertOne(req.body)
    .then((newSubject)=>{
        res.status(201).json({
            message:"subject created successfully",
            data: newSubject
        });
    })
    .catch(err=>{
        res.status(500).json({ message:"An error has occurred"});
    });
};

subjectControllers.updateOne = async (req, res) => {
    subjectDaos.updateOne(req.params.subject_id, req.body)
    .then((updateSubject) => {
        if (updateSubject) {
            res.json({
                message: "Subject updated successfully",
                data: updateSubject
            });
        } else {
            res.status(404).json({
                message: "Subject not found"
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

subjectControllers.deleteOne = async (req, res) => {
    subjectDaos.deleteOne(req.params.subject_id)
        .then((deletedSubject) => {
            if (deletedSubject) {
                res.json({
                    message: "subject deleted successfully",
                    data: deletedSubject
                });
            } else {
                res.status(404).json({
                    message: "subject not found"
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

export default subjectControllers;
