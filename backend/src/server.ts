import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

// Enable use of format json on express
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);





//NOTES
// Metodos HTTP = GET, POST, PUT, DELETE
// Query Params: http:// localhost:3333/users?search=wander
// Route Params: http:// localhost:3333/users/1
// Body: Resource
/*
app.post('/users', (request, response) => {
  return response.json({message: 'Hello World'});
});
*/