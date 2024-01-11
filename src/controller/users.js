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
        // ;
        // // let body.email })
        // ;
        // if (!){
        //     .status(200).send(]"users created succsessfully"})
        // } else {
        //     .status(400).send({`User withbody.email} already exists`})
        // }
        const newUser= new UserModel({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email })
        await newUser.save()
        res.status(200).json({message:"user registered succefully", data:newUser})
    } catch (error) {
        res.status(500).send({error:"create userr error"})
    }
}

export default {
    getAllUsers,
    createUser
}