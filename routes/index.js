const express = require('express');
const router = express.Router();

const key_fr = {
    key: {
        residence: 'Résidence',
        room: 'Logement',
        bigEvent: 'Evénement',
        location: 'location',
        gallery: 'Galerie',
    }
}

const logement = {
    presentation: "LE LOGEMENT : DIFFÉRENTES POSSIBILITÉS\n" +
        " \n" +
        "\n" +
        "Attachée aux valeurs de respect, de liberté et de pluralisme, la résidence reçoit des étudiants\n" +
        "\n" +
        "garçons et filles de l'enseignement supérieur  âgés de 18 à 26 ans de tous horizons géographiques culturels et religieux pour l'année universitaire ou pour des séjours  à la nuit ou au mois."
    ,
    chambreSimple:{
        title: "Chambre simple\n",
        text: "La résidence possède 14 chambres simples (12 à 15m2).\n" +
            "\n" +
            "Sauf raison impérieuse, elles sont réservées aux étudiants qui ont déjà un an d'ancienneté en chambre double.\n" +
            "\n" +
            "Les chambres sont équipées de rangements et bureaux. Il y a une salle de douche avec WC pour deux chambres."
    },
    chamnbreDouble :{
        title: "Chambre double\n",
        text :             "La résidence possède 20 chambres doubles (16 à 18m2).\n" +
            "\n" +
            "Les chambres sont équipées de rangements et bureaux. Il y a une salle de douche  avec WC pour deux chambres."
    }
}

const history = {
    title: "HISTOIRE",
    text: "C’est en 1892 qu’une quarantaine d’étudiants créent, avec Jean MONNIER, « la Société Fraternelle des Etudiants Protestants » qui organise rencontres, conférences mensuelles, groupes de travail, groupes d’études de questions religieuses etc. Quatre ans plus tard, la société s’installe 46 rue de Vaugirard et se transforme en « Cercle des Etudiants Protestants de Paris » ; les étudiants deviennent partie prenante de l’animation et du fonctionnement de l’Association. Ce cercle devient très vite un pôle important du monde étudiant parisien, à la fois centre intellectuel, restaurant bon marché et lieu de convivialité. Son rayonnement dépasse Paris puisqu’il participe à la création de la Fédération Française des Associations Chrétiennes d’Etudiants, la « Fédé».\n" +
        "\n" +
        "Entre les deux guerres, le Cercle devient l’Association des Etudiants Protestants de Paris. L’association, reconnue d’utilité publique le 11 mars 1923, devient propriétaire de l’immeuble du 46 rue de Vaugirard et débute l’activité d’hébergement avec 7 étudiants résidents. Ils seront 31 en 1937. Ces résidents deviennent le noyau de l’Association, organisant conférences, groupes et expositions.\n" +
        "\n" +
        "Pendant la Seconde Guerre Mondiale, l’Association est contrainte de cesser ses activités par décision des autorités d’occupation. Mais la résidence et le restaurant subsistent, sous la responsabilité de l’Eglise Réformée de France. L’activité associative reprend après la guerre et le 46 est, dans les années cinquante, un lieu de formation et de débats plein d’effervescence. Après 1968, l’activité de foyer est arrêtée. L’A.E.P.P. devient un espace de libre parole et un forum d’associations.\n" +
        "\n" +
        "En 1981 le conseil de l’A.E.P.P. décide de revenir à la vocation d’origine de l’association. L’hébergement et les activités renaissent avec le concours des étudiants. En 2001  l’association vend le bâtiment de la rue de Vaugirard. En 2006, elle fait l’acquisition d’un immeuble plus spacieux, 4 rue Titon à Paris (75011),  afin d’y installer un espace fonctionnel et moderne regroupant une résidence et  un pôle d’animation étudiante.",
}

const reseaux = {
    title: "RÉSEAU ASSOCIATIF",
    text: "L’A.E.P.P.  est membre de la Fédération Française des Associations Chrétiennes d’Etudiants (FFACE) et de la Fédération Protestante de France. Elle fait partie du Synode de l’Eglise Réformée de France. "
}
const blocPresentation = {
    title: 'AEPP',
    text: " L’Association des Etudiants Protestants de Paris dite A.E.P.P. est une association loi de 1901 reconnue d’utilité publique en 1926. \
        L’A.E.P.P. se veut un espace de réflexion et de partage ayant le souci d’aider les étudiants à faire de leur période de formation universitaire un véritable temps de développement humain. \
        La résidence étudiante est le cœur de l’association, avec l’apprentissage exceptionnel que représente la vie communautaire. Elle reçoit des étudiants garçons et filles de tous  horizons géographiques culturels et religieux avec le souci de leur manifester un accueil chaleureux, stimulant et ouvert. ",
    soustitre: "Association des Etudiants Protestants de Paris ",
}


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
        {
            title: 'Express', key: {
                residence: 'Résidence',
                room: 'Logement',
                bigEvent: 'Evénement',
                location: 'location',
                gallery: 'Galerie',
                langue: "langue",
                presentation: blocPresentation
            }
        });
});

module.exports = router;
