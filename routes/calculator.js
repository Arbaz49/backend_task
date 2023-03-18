import express from 'express';
import { deletevariable, getvariable, updatevariable } from '../controllers/calculator.js';
import { Protect } from '../controllers/UserController.js';


const router=express.Router();
router.route("/").get(Protect,getvariable);
router.route("/").put(Protect,updatevariable);
router.route("/").delete(Protect,deletevariable);


export default router