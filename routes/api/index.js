var express = require('express');
var router = express.Router();

var Product = require('../../models/Product')

router.get('/', function(req, res, next) {
  res.json({ title: 'Hello API!' });
});

router.route('/products')
  .post(function(req, res) {
    var product = new Product()
    product.name = req.body.name 
    product.price = req.body.price 
    product.save(function(err) {
      if (err) res.send(err);
      res.json({ 
        message: 'Product created',
        data: {
          prodct: product
        } 
      });
    });
  })
  .get(function(req, res) {
    Product.find(function(err, products) {
        if (err) res.send(err);
        res.json(products);
    });
  })

module.exports = router;
