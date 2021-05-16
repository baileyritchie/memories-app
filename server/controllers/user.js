import bycrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signin =  async (req,res) => {
  const {email,password} = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (!existingUser) return res.status(404).json({message:"User does not exist."})

    const isPasswordCorrect = await bycrpt.compare(password,existingUser.password);

    if (!isPasswordCorrect) return res.status(401).json({message: "Invalid credentials"});

    const token = jwt.sign({email:existingUser.email,id: existingUser._id},process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    res.status(200).json({result:existingUser,token});

  } catch (err) {
    res.status(500).json({message:'Something went wrong.'})
  }
}
export const signup =  async (req,res) => {
  const {email,password,firstName,lastName,confirmPassword} = req.body;
  try {
    const existingUser = User.findOne({email}); 
    if (existingUser) res.status(400).json({message: "User Already Exists."});
    if (password !== confirmPassword) res.status(400).json({message: "Passwords don't match."});

    const hashedPassword = await bycrpt.hash(password,12);
    const result = await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`})
    const token = jwt.sign({email:result.email,id: result._id},process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    res.status(200).json({result,token})
  } catch (err) {
    res.status(500).json({message: "Something went wrong."})
  }
}
