import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../modules/user.module.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

import { ApiResponse } from "../utils/ApiResponse.js";

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

export {registerUser};