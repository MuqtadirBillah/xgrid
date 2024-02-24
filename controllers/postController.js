const { handleResponseWithStatus } = require("../helpers/utils")
const Post = require("../models/post")

const getFollowedPost = (req, res) => {
    // Using aggregate function of mongoose or any other sql db 
    // First check the incoming bearer token to see and match the user id 
    // Now check the followed pages/friend from following schema 
    // Once got all the followed users get all the post of those users 

    // Can apply limits and pagination
}

module.exports = {
    getFollowedPost
}