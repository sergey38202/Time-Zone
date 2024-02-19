import express from 'express';

import { createUser, getAllUsers, getProfileInfo, loginUser } from '../controllers/userController.js';
import authenticateUser from '../middlewares/authMiddleware.js';

const route = express.Router();

route.post('/register', createUser);
route.post('/login', loginUser);
route.get('/users', authenticateUser, getAllUsers);
route.get('/profile', authenticateUser, getProfileInfo);

export default route;
