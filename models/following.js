const { default: mongoose } = require("mongoose");

const followingSchema = new mongoose.Schema({
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
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

module.exports = mongoose.model("Following", followingSchema);