import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';



const normalizeEmail = (email) => email.toLowerCase().trim();
const cleanPassword = (password) => password.trim();


// register user
export const registerUser = async (req, res) => {
  const {email, password } = req.body;

// validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

  // check if user exists
  const existingUser = await User.findOne({ email: normalizeEmail(email) });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // check if password is empty
  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }
  // check if email is empty
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(201).json({ 
      message: 'User registered successfully', 
      data: {
        id: user._id,
        email: user.email,
      },
      token: generateToken(user._id),
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error registering user', error });
    
  }
}

// login user
export const loginUser = async (req, res) => {
  const {email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ 
      message: 'Login successful', 
      data: {
        id: user._id,
        email: user.email,
      },
      token: generateToken(user._id)
      } );
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
}


// forgot password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // generate token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // hash token
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // save to DB
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins

    await user.save();

    // create reset URL
    const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

    // ⚠️ For now just return it (later you'll email it)
    res.status(200).json({
      message: "Reset link generated",
      resetURL,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending reset email" });
  }
};


// reset password
 export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // validate input
    if (!cleanPassword(password)) {
      return res.status(400).json({ message: 'Password is required' });
    }

  try {
    // hash incoming token
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // clear reset fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error resetting password" });
  }
};


// logout user
export const logoutUser = async (req, res) => {

  res.status(200).json({ message: 'Logout successful' });
}

//delete user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.deleteOne({ _id: userId });

    res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};