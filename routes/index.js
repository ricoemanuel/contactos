const {Router}=require('express')
const {getUsers, postUsers, putUsers, deleteUsers}=require('../controllers/index.controllers')
const router=Router();

router.get('/users',getUsers)
router.post('/users',postUsers)
router.put('/users',putUsers)
router.delete('/users',deleteUsers)
module.exports=router