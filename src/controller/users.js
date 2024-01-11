import UserModel from '../models/user.js'

const getAllUsers = async(req, res) => {
    try {
        let users = await UserModel.find()
        res.status(200).send({message:"Users list fetched"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const createUser = async(req, res) => {
    try {
        let user = await UserModel.findOne({ email: req.body.email })

        
        if (!user){
            await UserModel.create(req.body)
            res.status(200).send({message:"users created succsessfully"})
        } else {
            res.status(400).send({message:`User with ${req.body.email} already exists`})
        }
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export default {
    getAllUsers,
    createUser
}