import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
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

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() };

    users.push(userWithId);
    res.send(`User with name ${userWithId.firstName} added`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

export default router;