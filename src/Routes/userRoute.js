const express=require("express")
const loginValidator = require("../validator/loginValidator")
const { loginUser } = require("../controller/userController")
const registerValidator = require("../validator/registerValidator")
const { registerUser } = require("../controller/userController")
// const { loginUser, registerUser } = require("../../utils/controller/userController")
// const registerValidator = require("./validator/registerValidator")
// const loginValidator = require("./validator/loginValidator")

const router=express.Router()

router.post("/login",loginValidator,loginUser)
router.post("/register",registerValidator,registerUser)


module.exports=router

