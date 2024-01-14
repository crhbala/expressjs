import UserModel from "../models/user.js"


const getAlluser = async(req, res) => {
    try {
         let users = await UserModel.find()
         res.status(200).send({message: "user list fetched",users})
    } catch (error) {
        res.status(500).send({error:error.message})
    }   
}


const getUserById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findById(id)
        res.status(200).send({message: "user data fetched",user})
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

const createUser = async(req, res) => {
    try {
        const { email} = req.body;
        
        const user = await UserModel.findOne( {email} );
        
        if (!user)
        {
             await UserModel.create(req.body)
            res.status(200).send({message:"user created successfully"})
        }
        else {
        res.status(400).send({message:`user with ${req.body.email} already exists`})
        
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:error.message})
    }
}

const editUserById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findByIdAndUpdate( id );
            if (user)
            {
                user.firstName = req.body.firstName
                user.lastName = req.body.lastName
                user.email = req.body.email
                
                await user.save()
                res.status(200).send({message:"user edited successfully"})
        }
        else {
        res.status(400).send({message:'invalid user id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

const deleteUserById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findByIdAndDelete( id );
        if (user)
           
        {
             await UserModel.deleteOne({user})
            res.status(200).send({message:"user deleted successfully"})
        }
        else {
        res.status(400).send({message:'invalid user id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

export default {
    getAlluser,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}