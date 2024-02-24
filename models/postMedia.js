const { default: mongoose } = require("mongoose");

const postMediaSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    url: {
      type: String,
      required: [true, 'Post media url cannot be empty.']
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
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

module.exports = mongoose.model("PostMedia", postMediaSchema);