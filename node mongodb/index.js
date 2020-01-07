let express = require("express");
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let mongoURL = 'mongodb://localhost:27017/test_db';
// it will conect the mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true });
let models = require('./models/index').models;

let app = express();

// to send data we will use post method so we will use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async function(req,res){

    // let user = await models.user_master.create({
    //     is_active: true,
    //     is_deleted: false,
    //     firstname: 'shoeb',
    //     lastname: 'ranger',
    //     email: 'dsadsadsad',
    //     mobile_number: 'dasdsadasd'
    // })
    
    // let user2 = await models.product_master.create({
    //     productname: 'Xaomi',
    //     actualprice: '$60',
    //     discount: '10% OFF',
    //     discounted: '$50',
    //     quality: 'First Class'
    // })


    let user = await models.user_master.find({
        is_active: true,
        is_deleted: false
    })
    
    let product = await models.product_master.find({})
    
    // let user = await models.user_master.deleteMany({
    //     firstname: 'shoeb1'
    // })
    res.status(200);
    res.send([user, product]);
    // res.send(user2);
})

app.post('/product', async function(req, res) {
    let body = req.body;
    let user = await models.user_master.create({
        is_active: true,
        is_deleted: false,
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        mobile_number: body.mobilenumber
    });
    // res.json({
    //     user
    // })
})
app.listen(3000)

//https://mongoosejs.com/docs/