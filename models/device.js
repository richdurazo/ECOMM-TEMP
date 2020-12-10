const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
    {
        uuid: {
            type: String,
            required: true,
            unique: true,
        },
        location: {
            type: String
        },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Device', deviceSchema)