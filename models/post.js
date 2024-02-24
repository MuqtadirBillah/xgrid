const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
    },
    type: {
        type: String,
        required: [true, 'Post type is requried!'],
        default: 'regular',
        enum: ['regular', 'promotion', 'event']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    is_active: {
      type: Boolean,
      default: true
    },
    creation_date: {
      type: String
    },
    updation_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Post", postSchema);