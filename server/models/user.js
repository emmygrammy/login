import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken:{
    type: String,
    default: null,
  },
  resetPasswordExpire:{
    type: Date,
    default: null,
  },
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);