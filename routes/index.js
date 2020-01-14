const express = require('express');
const router = express.Router();

const key_fr = {
  key : {
    residence : 'Résidence',
    room : 'Logement',
    bigEvent : 'Evénement' ,
    location : 'location',
    gallery: 'Galerie'
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', key_fr });
});

module.exports = router;
