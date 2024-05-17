const {Router}=require('express')
const {getUsers}=require('../controllers/index.controllers')
const router=Router();

router.get('/users',getUsers)
module.exports=router