import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/db.js'; 
import 'dotenv/config'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const clientPath = path.join(__dirname, '..', 'client');
const server = express();

const port = process.env.PORT || 8000;

server.use(cors());
server.use(express.static(clientPath));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json()); 


server.use('/', router);

server.get('/', (req, res) => {
   res.sendFile(path.join(clientPath, 'index.html'));
});
 
server.get('/privacy-policy', (req, res) => {
   res.sendFile(path.join(clientPath, 'privacy-policy.html'));
});
 
server.get('/terms-of-service', (req, res) => {
   res.sendFile(path.join(clientPath, 'terms-of-service.html'));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});