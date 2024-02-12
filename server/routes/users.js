import express from 'express';
import UserModel from '../models/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import WalletModel from '../models/wallet.js';

const router = express.Router();

router.post('/reg', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) return res.json({ msg: 'User exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });
  await newUser.save();
  const newWallet = await WalletModel({
    username,
  });
  await newWallet.save();
  res.json({ msg: 'User registered !' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ msg: "User doesn't exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ msg: "Password doesn't match" });
  }

  const token = jwt.sign({ userID: user._id }, 'secret');
  res.json({ token, userID: user._id, msg: 'Login successful' }); // Sending the token along with other necessary information
});

export { router as UserRouter };
