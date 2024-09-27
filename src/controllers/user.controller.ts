import { eq } from 'drizzle-orm';
import { Request, Response } from 'express';
import { users as userSchema } from '../model/users';
import { db } from '../database/connection';

class UserController{

    async updateUserById(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await db.update(userSchema).set({ name, email }).where(eq(userSchema.id, Number(id)));
        res.json(user);
    }

    async deleteUserById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await db.delete(userSchema).where(eq(userSchema.id, Number(id)));
        res.json(user);
    }

    async findAllUsers(req: Request, res: Response) {
        const users = await db.select().from(userSchema);
        res.json(users);
    }

    async createUser(req: Request, res: Response) {
        console.log(req.body);
        const { name, email } = req.body;
        const user = await db.insert(userSchema).values([{ name, email }]);
        res.json(user);
    }

    async findUserById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await db.select().from(userSchema).where(eq(userSchema.id, Number(id)));
        res.json(user);
    }
}

export default new UserController();

// const updateUserById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const user = await db.update(userSchema).set({ name, email }).where(eq(userSchema.id, Number(id)));
//     res.json(user);
// }

// const deleteUserById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const user = await db.delete(userSchema).where(eq(userSchema.id, Number(id)));
//     res.json(user);
// }

// const findAllUsers = async (req: Request, res: Response) => {
//     const users = await db.select().from(userSchema);
//     res.json(users);
// }

// const createUser = async (req: Request, res: Response) => {
//     const { name, email } = req.body;
//     const user = await db.insert(userSchema).values([{ name, email }]);
//     res.json(user);
// }

// const findUserById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const user = await db.select().from(userSchema).where(eq(userSchema.id, Number(id)));
//     res.json(user);
// }

// export default {
//     updateUserById,
//     deleteUserById,
//     findAllUsers,
//     createUser,
//     findUserById
// }

