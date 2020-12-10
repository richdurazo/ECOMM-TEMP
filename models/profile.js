const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        location: {
            type: String,
        },
        bio: {
            type: String
        }
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Profile', profileSchema)