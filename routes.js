import express from "express";
import { getController,postController,deleteController,putController } from "./controller.js";

const router = express.Router()

router.get('/',getController)

router.post('/',postController)

router.delete('/:id',deleteController) // /catalog?name=name&id=2

router.put('/',putController)

export default router