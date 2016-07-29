var express = require('express');
var fs = require('fs');
var router = express.Router();

/* james carrier array - probably a best way to do this */

//var arrCarriers = ['aramex','asendia','Australia-Post','Blue-Dart','boxberry','cainiao','canada-post','canpar','china-post','chronopost','colis-prive','colissimo'];
var arrCarriers = [];


var fs = require('fs');
fs.readdir('./public/images/carriers/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        // do something with each file HERE!
        if (file.includes('.DS') == false) {
          arrCarriers.push(file)
        }
    });
 });
 // because trying to do something with files here won't work because
 // the callback hasn't fired yet.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { slug: 'homepage', 
    title: 'Zenkraft Website',
    carriers:arrCarriers });
});

router.get('/fedex-salesforce', function(req, res, next) {
  res.render('products/fedex', { slug:'fedex', title: '' });
});

router.get('/ups-salesforce', function(req, res, next) {
  res.render('products/ups', { slug:'ups',title: '' });
});

router.get('/usps-salesforce', function(req, res, next) {
  res.render('products/usps', { slug:'usps',title: '' });
});

router.get('/multi-carrier', function(req, res, next) {
  res.render('products/multi', { slug:'multi', title: '' });
});

router.get('/shipautomate', function(req, res, next) {
  res.render('products/shipautomate', { slug:'automate',title: '' });
});

router.get('/shipmate-pricing', function(req, res, next) {
  res.render('products/shipmate-pricing', { title: '' });
});

router.get('/pick-and-pack-station', function(req, res, next) {
  res.render('examples/pickpack', { slug:'pickpack',title: '' });
});

router.get('/call-center-returns', function(req, res, next) {
  res.render('examples/returns', { slug:'returns',title: '' });
});

router.get('/work-order-field-management', function(req, res, next) {
  res.render('examples/field', { slug:'field',title: '' });
});

router.get('/drop-shipping', function(req, res, next) {
  res.render('examples/dropshipping', {slug:'dropshipping', title: '' });
});

router.get('/shipment-tracking', function(req, res, next) {
  res.render('examples/tracking', { slug:'tracking',title: '' });
});

router.get('/shipment-quotes', function(req, res, next) {
  res.render('examples/quotes', { slug:'quotes',title: '' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: '' });
});

router.get('/customers', function(req, res, next) {
  res.render('other/customers', { slug: 'customers', title: 'Customers' });
});

router.get('/partners', function(req, res, next) {
  res.render('other/partners', { slug: 'partners', title: 'Partners' });
});

router.get('/about', function(req, res, next) {
  res.render('other/about', { title: '' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '' });
});

router.get('/master-subscription-agreement', function(req, res, next) {
  res.render('msa', { title: '' });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('other/privacy', { title: 'Privacy Policy' });
});


module.exports = router;
