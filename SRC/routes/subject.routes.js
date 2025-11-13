import { Router } from "express";
import subjectControllers from "../controllers/subject.controllers.js";
const router = Router();
router.get("/getAll",subjectControllers.getAll);

router.get("/getOne/:subject_id",subjectControllers.getOne);
router.post("/insertOne", subjectControllers.insertOne);
router.put("/updateOne/:subject_id", subjectControllers.updateOne);
router.delete("/deleteOne/:subject_id", subjectControllers.deleteOne);

export default router;
