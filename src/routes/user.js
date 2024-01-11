import { Router } from 'express'
import UsersController from '../controller/users.js'
const router = Router()

router.get('/', UsersController.getAllUsers)
router.post('/users', UsersController.createUser)

export default router