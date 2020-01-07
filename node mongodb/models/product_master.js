const mongoose = require("mongoose");

let productMaster = new mongoose.Schema ({
    productname: String,
    actualprice: String,
    discount: String,
    discounted: String,
    quality:   String
})


let product_master = mongoose.model('product_master', productMaster);
module.exports = product_master;