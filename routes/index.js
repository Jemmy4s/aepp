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

const blocPresentation = {
    title : 'AEPP',
    text : " L’Association des Etudiants Protestants de Paris dite A.E.P.P. est une association loi de 1901 reconnue d’utilité publique en 1926. \
        L’A.E.P.P. se veut un espace de réflexion et de partage ayant le souci d’aider les étudiants à faire de leur période de formation universitaire un véritable temps de développement humain. \
        La résidence étudiante est le cœur de l’association, avec l’apprentissage exceptionnel que représente la vie communautaire. Elle reçoit des étudiants garçons et filles de tous  horizons géographiques culturels et religieux avec le souci de leur manifester un accueil chaleureux, stimulant et ouvert. ",
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',   key : {
      residence : 'Résidence',
      room : 'Logement',
      bigEvent : 'Evénement' ,
      location : 'location',
      gallery: 'Galerie',
      presentation :  blocPresentation}});
});

module.exports = router;
