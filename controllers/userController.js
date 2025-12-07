import express from 'express';
import User from '../data/userModel.js';


// create user controller
export const createUser = async (req, res)=> {
   const {name, age, phone} = req.body;

   try {
    //check if user already exists
    const existingUser = await User.findOne({phone});
    if(existingUser) {
    return res.status(200).json({message: "user already exists"});
   }

   //create the user
   const user = await User.create({name, age, phone});
   return res.status(201).json({message: "new user created successfully", user});
   }
   catch(err) {
    return res.status(500).json({message: "server error", err});
   }


}

//get all users 
export const getUsers = async (req, res)=> {
    try{
        const allUsers = await User.find();
        //if there are no users
        if(!allUsers) {
            return res.json({message: "there are no users in the database"});
        }

        return res.status(200).json({message: "users found", allUsers});
    }
    catch(err){
        return res.status(500).json({message: "error encountered", err});
    }
}

//update user details 
export const updateUser = async (req, res)=> {
    const id = req.params.id;
    const {name, age, phone} = req.body;
    try {
        //first, find the user by using id
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({message: "user not found"});
        }

        const updatedUser = await User.findByIdAndUpdate(id, {name, age, phone}, {new:true});
        
        if(!updatedUser) {
            return res.status(400).json({message: "failed to update user"});
        }
        return res.status(200).json({message: "user details updated", updatedUser});

    }
    catch(err){
        return res.status(500).json({message:"error encountered", err})
    }
}

//delete user controller
export const deleteUser = async (req, res)=> {
    const user_id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(user_id);
        if(!deletedUser) {
            return res.status(400).json("user not found");
        }
        return res.status(200).json("user deleted successfully");
    }
    catch(err){
        return res.status(500).json("error encoutered", err)
    }
}