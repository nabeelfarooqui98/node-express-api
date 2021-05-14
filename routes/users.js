import express from 'express';

import { createUser, deleteUser, getUser, getUserById, updateUser } from '../controllers/users.js';


const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        id: "1"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24,
        id: "2"
    }
];

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;