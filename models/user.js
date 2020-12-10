const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var like = {
    postId: { type: Schema.ObjectId, ref: 'posts' }
};
const userSchema = new Schema(
        {
            email: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            likes : [like],
            ratings: [{ type: Schema.ObjectId, ref: 'ratings'}],
            cart: {
                items: [
                    {
                        productId: { type: Schema.Types.ObjectId, required: true },
                        quantity: { type: Number, required: true }
                    }
                ]
            }
        },
        {
            timestamps: true
        }
);

module.exports = mongoose.model('User', userSchema)