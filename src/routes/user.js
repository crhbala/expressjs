import { Router } from 'express'
import UserController from '../controller/users.js'
const router = Router()

router.get('/', UserController.getAlluser)
router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.put('/:id', UserController.editUserById)
router.delete('/:id', UserController.deleteUserById)

export default router