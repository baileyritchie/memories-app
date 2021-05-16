import express from 'express';

import {signin,signup} from '../controllers/user.js';

const router = express.Router();

router.post('/signin',signin); // send some form data to sign in the user
router.post('/signup',signup); // send some form data to sign up the user




export default router;