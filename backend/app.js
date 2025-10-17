import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import connectDB from './config/db.js'; // Only import once

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config(); // Load .env file

const app = express();

// 🗄️ CONNECT DATABASE
connectDB(); // No argument needed — handles connection internally

// ROUTES INITIALIZATION
const router = express.Router();

// MIDDLEWARES
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CUSTOM RESPONSE METHOD (optional utility)
app.response.sendStatus = function (statusCode, type, message) {
  return this.contentType(type).status(statusCode).send(message);
};

// ROUTES
app.use('/', routes);

// SERVER LISTENER
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
