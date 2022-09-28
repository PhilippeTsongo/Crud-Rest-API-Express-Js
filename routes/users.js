import express from 'express';
import { usersList, newUser, singleUser, updateUser, deleteUser} from '../controllers/users.js';

const router = express.Router();


//All users list
router.get('/', usersList); 

//Add a new user
router.post('/', newUser);

//Get a unique user
router.get('/:id', singleUser);

router.patch('/:id', updateUser)


router.delete('/:id', deleteUser)

export default router;