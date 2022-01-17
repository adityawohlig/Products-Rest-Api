const express = require('express');
const router = express.Router();

//  /products 
router.get('/',(req,res, next) =>{
    res.status(200).json({
        message: 'Product route for Get handled successfully by router.'
    })
} );

router.post('/',(req,res, next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(200).json({
        message: 'Product Created successfully',
        createdProduct: product
    })
});

router.get('/:productId',(req,res, next) =>{
    const id = req.params.productId;

});

router.patch('/:productId',(req,res, next) =>{
    const id = req.params.productId;
    
});

router.delete('/:productId',(req,res, next) =>{
    const id = req.params.productId;
    
});

module.exports = router;