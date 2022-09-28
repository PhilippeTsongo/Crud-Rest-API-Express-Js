import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js'; 

const app = express();

const PORT = 5000;

app.use(bodyParser.json()); 
app.use('/users', usersRouter);

app.get('/', (req, res) => { res.send('WELCOME TO THE APP'); });

app.listen(PORT, ()=> console.log(`Serve running on port:http://localhost:${PORT}`));