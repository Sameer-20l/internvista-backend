import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import correlator from 'express-correlation-id';
import http from 'http';
import fs from "fs";
import { dirname, join } from 'path';
import { job_vista } from './config/db.js';
import initModels from './models/init-models.js';

initModels(job_vista);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();


const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(correlator());
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Job-Vista' });
});

export { server };
