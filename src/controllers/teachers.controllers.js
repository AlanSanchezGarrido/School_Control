import teachersDaos from "../DAOs/teachers.daos.js";

const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teachersDaos.getAll()
    .then(teachersList => {
        res.render("teachers-index.ejs", { teachers: teachersList });
    })
    .catch(err => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
    });
};

teachersControllers.getOne = (req, res) => {
    teachersDaos.getOne(req.params.teacher_id)
    .then((teachers) => {
        if (teachers) {
            res.render("edit-teachers.ejs", { teachers });
        } else {
            res.status(404).json({
                message: "Teacher not found"
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

teachersControllers.insertOne = async (req, res) => {
    teachersDaos.insertOne(req.body)
    .then((newTeacher) => {
        res.redirect("/api/teachers/getAll");
    })
    .catch(err => {
        res.status(500).json({ 
            message: "An error has occurred",
            error: err
        });
    });
};

teachersControllers.updateOne = async (req, res) => {
    teachersDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher) => {
        if (updatedTeacher) {
            res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
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
    .then((deletedTeacher) => {
        if (deletedTeacher) {
            res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
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