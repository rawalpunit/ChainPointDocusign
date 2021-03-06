require('dotenv').config();
const express = require('express');
const applyGlobalMiddleware = require('../config/applyGlobalMiddleware.js');
const cors = require('cors');

const usersRoutes = require('./users/usersRoutes.js');
const envsRoutes = require('./envelopes/envelopesRoutes');
const docsRoutes = require('./documents/documentsRoutes.js');
const chainpointRoutes = require('./chainpoint/chainpointRoutes.js');
const authRoutes = require('./auth/auth.js');
const paymentRoutes = require('./payments/paymentRoutes.js');

const corsOptions = process.env.STRIPE_FRONTEND_URL || 'http://localhost:3000';

// server
const server = express();

// middleware
applyGlobalMiddleware(server);
server.use(cors({ origin: corsOptions }));
server.use(express.json());

server.use((req, res, next) => {
  next();
});
// routes
server.get('/', (req, res) => {
  res.status(200).json({ SUCCESS: `Sanity check` });
});

server.use('/users', usersRoutes);
server.use('/documents', docsRoutes);
server.use('/envelopes', envsRoutes);
server.use('/auth', authRoutes);
server.use('/chainpoint', chainpointRoutes);
server.use('/payment', paymentRoutes);

module.exports = server;
