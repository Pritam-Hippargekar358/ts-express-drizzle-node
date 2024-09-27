import { Router } from "express";
import UserController from '../controllers/user.controller';
const router = Router();

// GET user/:id
router.get("/user/:id", UserController.findUserById);

// GET user
router.get("/user", UserController.findAllUsers);

// POST user
router.post("/user", UserController.createUser);

// PUT user/:id
router.put("/user/:id", UserController.updateUserById);

// DELETE user/:id
router.delete("/user/:id", UserController.deleteUserById);

// export the router
export default router;   