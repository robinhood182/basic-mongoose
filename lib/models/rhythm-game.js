const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    platform: {
        type: [String],
        validate: {
            validator(value) {
                return value && value.length > 0;
            },
            message: 'Platform requires at least one value'
        }
    },
    difficulty: {
        type: String,
        enum: ['easy', 'normal', 'hard']
    },
    originCountry: {
        city: String,
        country: {
            type: String,
            required: true
        }
    },
    freeVersion: {
        type: Boolean,
        default: false
    },
    releaseYear: Number,
    rating: {
        type: Number,
        min: 1,
        max: 10,
    }   
});

module.exports = mongoose.model('Rhythm_games', schema);