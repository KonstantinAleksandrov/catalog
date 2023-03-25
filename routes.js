import express from "express";
import { getProductsController,addProductController,deleteProductController,editProductController } from "./Modules/product/controller.js";

const router = express.Router()

router.get('/',getProductsController)
router.post('/',addProductController)
router.delete('/:id',deleteProductController) // /catalog?name=name&id=2
router.put('/',editProductController)

export default router