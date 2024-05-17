const {Router}=require('express')
const {getUsers,postUsers}=require('../controllers/index.controllers')
const router=Router();

router.get('/users',getUsers)
router.post('/users',postUsers)
module.exports=router