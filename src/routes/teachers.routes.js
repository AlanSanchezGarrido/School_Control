import { Router} from 'express';
import teachersControllers  from "../controllers/teachers.controllers.js";
const router = Router();

router.get("/getAll",teachersControllers.getAll);
router.get("/getOne/:teacher_id",teachersControllers.getOne);
router.post("/insertOne", teachersControllers.insertOne);
router.post("/updateOne/:teacher_id", teachersControllers.updateOne);
router.get("/deleteOne/:teacher_id", teachersControllers.deleteOne);

export default router;

