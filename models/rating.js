const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        },
        value: Number
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Rating', ratingSchema)