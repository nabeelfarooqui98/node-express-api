import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('GOTTEN');
    res.send('hello from homepage');
});

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});