const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const like = {
    userId: { type: Schema.ObjectId, ref: 'users' }
}
const image = {
    fileName: {
        type: String,
    },
    path: {
        type: string
    }
}
const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    images: [image],
    likes: [like]
});
module.exports = mongoose.model('Post', postSchema)