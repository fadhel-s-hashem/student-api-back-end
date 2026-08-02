const mongoose= require('mongoose')

const studentSchema = new mongoose.Schema({

    name : {
        type: String,
      required: true,
      trim: true,
    },

    favoriteFood: {
        type: String,
      default: 'Not added yet',
      trim: true,
    },

    favoriteEmoji: {
      type: String,
      default: '🙂',
      trim: true,
    },
}, {timestamps: true})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student