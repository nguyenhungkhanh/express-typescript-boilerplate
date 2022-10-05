import mongoose from 'mongoose'

const boThuSchema = new mongoose.Schema(
    {   
        stt: Number,
        word: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        meaning: {
            type: String,
            trim: true
        },
        pinyin: {
            type: String,
            trim: true
        },
        type: Number
    },
    { 
        timestamps: { createdAt: 'created_at' } 
    }
)

export default mongoose.model('BoThu', boThuSchema)