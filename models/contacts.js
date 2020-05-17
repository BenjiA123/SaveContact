const mongoose = require('mongoose');

const ContactShema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});
const Contact = module.exports = mongoose.model('Contact', ContactShema);