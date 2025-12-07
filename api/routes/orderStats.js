const express = require("express");
const router = express.Router();


const User = require('../models/User');
const Menu = require('../models/Menu');
const Payment = require('../models/Payments');

// middel ware


const verifyToken = require('../middleware/verifyToken')
const verifyAdmin = require('../middleware/verifyAdmin')


// get all order stats
router.get('/', async(req, res)=> {
    //  res.send("order status")
   try {
    const result = await Payment.aggregate([
        {
            $unwind:'$menuItems'
        },
        {
            $lookup:{
                from:'menus',
                localField:'menuItems',
                foreignField:"_id",
                as:'menuItemsDetails',
            }
        },
        {
            $unwind :'$menuItemesDetails'
        },
        {
            $group:{
                _id:'$menuItemsDetails.category',
                quantity:{ $sum:'$quantity'},
                revenue:{$sum:'$price'}

            }
        },
        {
            $project:{
                _id: 0,
                category:'$_id',
                quantity:'$quantity',
                revenue:'$revenue'
            }
        }
    ]);
    res.json(result)
    
   } catch (error) {
    res.status(500).send("Internal server Error:" +  error.message)
   }
});




module.exports= router;
