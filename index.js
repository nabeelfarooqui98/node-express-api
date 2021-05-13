import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('GOTTEN');
    res.send('hello from homepage');
});

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});