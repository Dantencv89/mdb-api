import {Router} from 'express';
import * as ctrl from '../controllers/ctrl';

const router = Router();

router.get("/done", ctrl.findDoneTasks)

router.post("/", ctrl.postRoute)

router.get("/", ctrl.findAllTasks)

router.get("/:id", ctrl.findOneTask)

router.delete("/:id", ctrl.deleteOneTask)

router.put("/:id", ctrl.updateOneTask)

export default router;