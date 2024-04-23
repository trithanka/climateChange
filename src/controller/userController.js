const User = require("../../model/userSchema")
const bcrypt = require("bcrypt");
const generateJWT = require("../../utils/jwtgenerate");
// const jwt=require("jsonwebtoken");


const registerUser=async(req,res)=>{
    const { fullName, email, password, userType, organizationName , displayName }=req.body
    const userExist=await User.findOne({email});
    if (userExist) {
        res.status(400)
        throw new Error("user already register")
    }
    //bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Capture user's IP address
    const ipAddress = req.ip; // Assuming you're using Express, req.ip gives you the user's IP address

    // Log the user's IP address
    console.log("User IP address:", ipAddress);

    const savedUser = await User.create({ fullName, email, password:hashedPassword, userType, organizationName , displayName });
    if (savedUser) {
        res.status(201).json({ _id: savedUser.id, email: savedUser.email ,fullName:savedUser.fullName})
    } else {
        res.status(400);
        throw new Error("user data is not valid")
    }
    // res.json({ message: "register the user" })
}


const loginUser=async(req,res)=>{
    const {email,password}=req.body
    const saveduser=await User.findOne({email});
    if(!saveduser){
        res.status(400)
        throw new Error("user not found")
    }
    //bcrypt
    const passwordMatch =await bcrypt.compare(password, saveduser.password)
    if (!passwordMatch) {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    //jwt
    const token = generateJWT(saveduser); 

    // Send the token back to the client
    res.status(200).json({ "jwt token":token,"email":saveduser.email })

}

module.exports={loginUser,registerUser}