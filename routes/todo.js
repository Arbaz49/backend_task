import express from 'express';
import { getTodo,deleteTodo,addTodo } from '../controllers/todoController.js';


const router=express.Router();
router.route("/").get(getTodo);
router.route("/").post(addTodo);
router.route("/:index").delete(deleteTodo);


export default router