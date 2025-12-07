import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

//router.patch('/:id', editUser)

router.delete('/users/:id', deleteUser);

export default router;

