const mongoose = require('mongoose');

let userMaster = new mongoose.Schema({
    is_active: Boolean,
    is_deleted: Boolean,
    firstname: String,
    lastname: String,
    email: String,
    mobile_number: String
});

let user_master = mongoose.model('user_master', userMaster);
module.exports = user_master;