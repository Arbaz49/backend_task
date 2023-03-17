import express from 'express';
import { deletevariable, getvariable, updatevariable } from '../controllers/calculator.js';


const router=express.Router();
router.route("/").get(getvariable);
router.route("/").put(updatevariable);
router.route("/").delete(deletevariable);


export default router