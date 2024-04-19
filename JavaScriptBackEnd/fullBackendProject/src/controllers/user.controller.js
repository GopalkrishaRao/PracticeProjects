import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../modules/user.module.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// method to create token later used in login user
const generateAccessAndRefreshTokens = async function(userId){
     try {
        const user=  await User.findById(userId);

        const accessToken = user.generateAccessToken() ;


        const refreshToken=
        user.generateRefreshToken();

     //    save refresh token in db
      user.refreshToken=refreshToken;

     // save user
     await user.save({validateBeforeSave:false})

     return {accessToken, refreshToken}
          
     } catch (error) {
          throw new ApiError(500, "Something went wrong while generating referesh and access token")
          
     }
};

// Register new user

const registerUser =asyncHandler(async (req, res)=>{
     /*     
          res.status(200).json({
            message:"ok"
             })
     */        

     // get user details from frontend

     const {fullName, email, username, password }=req.body
     // console.log("email", email);

     // validation-not empty
     /*
     if(fullName===""){
          throw new ApiError(400, "fullName is required")
     }

     or better way as follow
     */
     if(
          [fullName, email, username, password].some((field) => field?.trim() === "")
     ){
          throw new ApiError (400 , "All fields are required")

     }

     // check if user already exists: username, email

     const existedUser= await User.findOne({
          $or:[{username},{email}]
     });

     if (existedUser) {
          throw new ApiError(409, "User wiht email or username alreay exists") 
     }

     // check for images, check for avatar

    const avatarLocalPath = req.files?.avatar[0]?.path;
    
//     const coverImageLocalPath = req.files?.coverImage[0]?.path;
     let coverImageLocalPath;

     if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path
}


    if (!avatarLocalPath) {
          throw new ApiError(400, "Avatar file path not found");
    }

     // upload them to cloudinary, avatar

    const avatar = await uploadOnCloudinary(avatarLocalPath);

//     console.log(avatar);

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
     throw new ApiError(400, "Avatar file is required");
    };

     // create user object-create entry in db

     const user = await User.create({
          fullName,
          avatar:avatar.url,
          coverImage: coverImage?.url || "",
          email,
          password,
          username: username.toLowerCase()
     });

      // remove passord and refresh tokan field from response

     // check for user creation

          // First checks if user created by id (_id is cread automatically by db) select () removes password and refreshToken
     const createdUser = await User.findById(user._id).select("-password -refreshToken")

     if (!createdUser){
          throw new ApiError (500, "Something went wrong while registering user")
     };
    

     // return response

     return res.status(201).json(
          new ApiResponse(200, createdUser, "User Registered Successfully")
     )

});

// Login user
const loginUser = asyncHandler(async (req, res)=>{
     // get data fro req body

     const {email, username, password}= req.body;

     if (!username && !email){
          throw new ApiError (400, "username or email is required");
     };

     //find user(username or email exist or not)

     const user = await User.findOne({
          $or:[{username},{email}]
     });

     if(!user){
          throw new ApiError (404, "User does not exist")
     };
     
     // password check
     const isPasswordValid = await user.isPasswordCorrect(password);

     if(!isPasswordValid){
          throw new ApiError (401, "Invalied password")
     };

     // access and refresh token

     const {accessToken, refreshToken}= await generateAccessAndRefreshTokens(user._id);

     // send access and refresh token via cookies

     const loggdInUser= await User.findById(user._id).select("-password -refreshToken");

     const options= {
          httpOnly:true,

          //to make it cookes modify form server only not from frontend (to add security)
          secure:true
     }

     return res
     .status(200)
     .cookie("accessToken", accessToken, options)
     .cookie("refreshToken", refreshToken, options)
     .json(
          new ApiResponse(
               200,
               {
                    user:loggdInUser, accessToken, refreshToken
               },
               "user Logged In Successfully"
          )
     );


});


// logout user 

const logoutUser = asyncHandler( async(req, res)=>{
     // get the user

     // req.user from middle ware
     await User.findByIdAndUpdate(
          req.user._id,
          {
               $unset:{
                    refreshToken:1
               }
          },
          {
               new:true
          }
     )
     // 
     const options = {
          httpOnly:true,
          secure:true
     }

     console.log(req.cookie);
     return res
     .status(200)
     .clearCookie("accessToken", options)
     .clearCookie("refreshToken", options)
     .json(new ApiResponse(200, {}, "User logged Out"))
});

export {registerUser, loginUser, logoutUser};