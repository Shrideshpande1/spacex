
const User = require("../model/userModel");
const sendToken = require("../utiles/jwtToken");



// Register a User
exports.registerUser = async (req, res, next) => {
 

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
   
  });
  const token=user.getJWTToken()

  res.status(201).json({
    success:true,
    token

})
};

// Login User
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    res.status(400).json({
     message:"Please Enter Email & Password"
  
  })
  
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(401).json({
      message:"Invalid email or password"
  
  })
  
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    res.status(401).json({
      message:"Invalid email or password"
  
  })
    
  }

  sendToken(user, 200, res);
};

// // Logout User
// exports.logout = catchAsyncErrors(async (req, res, next) => {
//   res.cookie("token", null, {
//     expires: new Date(Date.now()),
//     httpOnly: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "Logged Out",
//   });
// });

