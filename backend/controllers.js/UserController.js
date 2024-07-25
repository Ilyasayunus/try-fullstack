import { where } from "sequelize";
import User from "../models/UserModel.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);

    } catch (error){
        console.log (error.message)
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);

    } catch (error){
        console.log (error.message)
    }
}


export const createUsers = async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).json({msg: "User Created"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const updateUsers = async (req, res) => {
    try { 
        await User.update (req.body, {
            where: {
                id: req.params.id
            }
        });
      res.status(201).json({msg: "User updated"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const deleteUsers = async (req, res) => {
    try { 
        await User.destroy ({
            where: {
                id: req.params.id
            }
        });
      res.status(201).json({msg: "User deleted"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };