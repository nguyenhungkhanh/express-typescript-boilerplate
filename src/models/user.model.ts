import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => validator.isEmail(value)
  },
  password: {
    type: String,
    required: true,
  }
},
{ timestamps: { createdAt: 'created_at' } }
)

export default mongoose.model('User', userSchema)