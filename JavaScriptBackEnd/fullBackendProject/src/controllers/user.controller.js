import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../modules/user.module.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { response } from "express";


// method to create token later used in login user
const generateAccessAndRefreshTokens = async function(userId){
     try {
        const user=  await User.findById(userId);

        const accessToken = await user.generateAccessToken() ;

        const refreshToken=await 
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
     /*
      alternative

     if (!(username || email)){
          throw new ApiError (400, "username or email is required");
     };
     */

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
               $set:{
                    refreshToken:undefined
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

     return res
     .status(200)
     .clearCookie("accessToken", options)
     .clearCookie("refreshToken", options)
     .json(new ApiResponse(200, {}, "User logged Out"))
});

// Refresh access token

const refreshAccessToken = asyncHandler(async (req, res)=>{
     try {
          // req.body for mobile user
          const incommingRefreshToken = req.cookies.refreshToken || req.body.refreshtoken;
     
          if (!incommingRefreshToken) {
               throw new ApiError(401, "Unauthorized request in refreshTokien")
          };
     
         const decodedToken = jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
     
          // find the user based on id (refresh token is generated based on _id )
     
          const user= await User.findById(decodedToken?._id);
     
          if (!user) {
               throw new ApiError(401, "Invalid RefreshTokien no user found")
          };
     
     
          // mathch the token to verify user 
          
          if(incommingRefreshToken!== user?.refreshToken){
               throw new ApiError(401, "Refresh token is expired or does not mathc")
          };
     
          // create option 
          const options = {
               httpOnly:true,
               secure:true
          };
          
          const {accessToken, newRefreshToken}=await generateAccessAndRefreshTokens(user._id);
     
          return res
                    .status(200)
                    .cookie("AccessToken", accessToken, options)
                    .cookie("RefreshToken", newRefreshToken, options)
                    .json(
                         new ApiResponse(
                              200,
                              {accessToken,refreshToken:newRefreshToken},
                              "Accesstoken refreshed"
                         )
                    )
     } catch (error) {
          throw new ApiError(401, error?.message || "Invallied refresh token")
          
     }
});

const changeCurrentPassword = asyncHandler(async (req, res)=>{

     // get old and new password from frontend
      
     const {oldPassword, newPassword}= req.body;

     /* to check password and confirm password
     const {oldPassword, newPassword, confPassword}= req.body;

     if (!(newPassword===confPassword)) {
           throw new ApiError (401, "Password does not match")
     }
     */
     
     // get user
     const user= await User.findById(req.user?.id);

     // check old password
     // isPasswordCorrct from user module 
     const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

     if (!isPasswordCorrect) {
          throw new ApiError(400, "Invalied Password")
     };
      
     // set new password
     user.password=newPassword;

     // save new password
     user.save({validateBeforeSave:false});

     return res
     .status(200)
     .json(new ApiResponse(200, {}, "Password changed successfully"));
});

// get current user
const getCurrentUser = asyncHandler(async(req, res)=>{
     return res
     .status(200)
     .json(new ApiResponse (200, req.user, "current user fetched successfully"));

});

// update user details (text type)
const updateAccountDetails = asyncHandler(async(req, res) => {
     const {fullName, email} = req.body

     if (!fullName || !email) {
          throw new ApiError(400, "All fields are required")
     }


     const user = await User.findByIdAndUpdate(
          req.user?._id,
          {
               $set: {
                    fullName,
                    email: email
               }
          },
          {
               new: true
          }
    ).select("-password")

     return res
     .status(200)
     .json(new ApiResponse(200, user, "Account details updated successfully"))
});


// update file type in user details
const updateUserAvatar = asyncHandler(async(req, res) => {
     const avatarLocalPath = req.file?.path
 
     if (!avatarLocalPath) {
         throw new ApiError(400, "Avatar file is missing")
     }
 
     //TODO: delete old image - assignment ustinf utility function
     
     // updload to cluldinary
     const avatar = await uploadOnCloudinary(avatarLocalPath);
 
     if (!avatar.url) {
         throw new ApiError(400, "Error while uploading on avatar")
     };

     //update avatar detail in db 
     const user = await User.findByIdAndUpdate(
         req.user?._id,
         {
             $set:{
                 avatar: avatar.url
             }
         },
         {new: true}
     ).select("-password")
 
     return res
     .status(200)
     .json(
         new ApiResponse(200, user, "Avatar image updated successfully")
     )
 });


 const updateUserCoverImage = asyncHandler(async(req, res) => {
     const coverImageLocalPath = req.file?.path
 
     if (!coverImageLocalPath) {
         throw new ApiError(400, "Cover image file is missing")
     };
 
     //TODO: delete old image - assignment using utility function
 
     // upload to clouldnary
     const coverImage = await uploadOnCloudinary(coverImageLocalPath);
 
     if (!coverImage.url) {
         throw new ApiError(400, "Error while uploading on avatar")
     };
     
     // update in the db
     const user = await User.findByIdAndUpdate(
         req.user?._id,
         {
             $set:{
                 coverImage: coverImage.url
             }
         },
         {new: true}
     ).select("-password")
 
     return res
     .status(200)
     .json(
         new ApiResponse(200, user, "Cover image updated successfully")
     )
 });


 const getUserChannelProfile = asyncHandler(async(req, res) => {
     // get user
     const {username} = req.params;
 
     if (!username?.trim()) {
         throw new ApiError(400, "username is missing")
     };
 

     // db query
     const channel = await User.aggregate([
          // match username
         {
             $match: {
                 username: username?.toLowerCase()
             }
         },
          // find subscribes    
         {
             $lookup: {
                 from: "subscriptions",
                 localField: "_id",
                 foreignField: "channel",
                 as: "subscribers"
             }
         },
          //  Find how many we subscribed
         {
             $lookup: {
                 from: "subscriptions",
                 localField: "_id",
                 foreignField: "subscriber",
                 as: "subscribedTo"
             }
         },

         {
             $addFields: {
                 subscribersCount: {
                     $size: "$subscribers"
                 },
                 channelsSubscribedToCount: {
                     $size: "$subscribedTo"
                 },
                 isSubscribed: {
                     $cond: {
                         if: {$in: [req.user?._id, "$subscribers.subscriber"]},
                         then: true,
                         else: false
                     }
                 }
             }
         },
     //   View onlyl selcted fileds  
         {
             $project: {
                 fullName: 1,
                 username: 1,
                 subscribersCount: 1,
                 channelsSubscribedToCount: 1,
                 isSubscribed: 1,
                 avatar: 1,
                 coverImage: 1,
                 email: 1
 
             }
         }
     ]);
     // check query returning values or not
     if (!channel?.length) {
         throw new ApiError(404, "channel does not exists")
     };
 
     return res
     .status(200)
     .json(
         new ApiResponse(200, channel[0], "User channel fetched successfully")
     );
 });
 
 const getWatchHistory = asyncHandler(async(req, res) => {
     const user = await User.aggregate([
         {
             $match: {
                 _id: new mongoose.Types.ObjectId(req.user._id)
             }
         },
         {
             $lookup: {
                 from: "videos",
                 localField: "watchHistory",
                 foreignField: "_id",
                 as: "watchHistory",
                 pipeline: [
                     {
                         $lookup: {
                             from: "users",
                             localField: "owner",
                             foreignField: "_id",
                             as: "owner",
                             pipeline: [
                                 {
                                     $project: {
                                         fullName: 1,
                                         username: 1,
                                         avatar: 1
                                     }
                                 }
                             ]
                         }
                     },
                     {
                         $addFields:{
                             owner:{
                                 $first: "$owner"
                             }
                         }
                     }
                 ]
             }
         }
     ])
 
     return res
     .status(200)
     .json(
         new ApiResponse(
             200,
             user[0].watchHistory,
             "Watch history fetched successfully"
         )
     )
 });

export {
          registerUser, 
          loginUser, 
          logoutUser,
          refreshAccessToken,
          changeCurrentPassword,
          getCurrentUser,
          updateAccountDetails,
          updateUserAvatar,
          updateUserCoverImage,
          getUserChannelProfile,
          getWatchHistory
     };