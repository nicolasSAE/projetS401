import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'postgres',
    port: 5432,
    host: process.env.DB_HOST
});

const db = {sequelize, Sequelize}

import {Compte} from "./compte.model.js";
db.compte = Compte(sequelize);
import {Attraction} from "./attraction.model.js";
db.attraction = Attraction(sequelize);
import {Stand} from "./stand.model.js";
db.stand = Stand(sequelize);
import {Produit} from "./produit.model.js";
db.produit = Produit(sequelize);
import {Service} from "./service.model.js";
db.service = Service(sequelize);
import {Emplacement} from "./emplacement.model.js";
db.emplacement = Emplacement(sequelize);
import {TypeAttraction} from "./typeAttraction.model.js";
db.type_attraction = TypeAttraction(sequelize);
import {TypeStand} from "./typeStand.model.js";
db.type_stand = TypeStand(sequelize);
import {AvisStand} from "./avis_stand.model.js";
db.avis_stand = AvisStand(sequelize);
import {AvisAttraction} from "./avis_attraction.model.js";
db.avis_attraction = AvisAttraction(sequelize);
import {Billet} from "./billet.model.js";
db.billet = Billet(sequelize);
import {FormulaireContact} from "./formulaire_contact.model.js";
db.formulaire_contact = FormulaireContact(sequelize);
import {Livre_Or} from "./livre_dor.model.js";
db.livre_or = Livre_Or(sequelize);

//
// Relations
//


// Relation entre attraction et compte
(db.compte).hasMany(db.attraction,{foreignKey:'id_compte'});
(db.attraction).belongsTo(db.compte, {foreignKey:'id_compte'});

//Relation entre attraction et typeAttraction
db.type_attraction.hasMany(db.attraction, {foreignKey: 'id_type_attraction'});
db.attraction.belongsTo(db.type_attraction, {foreignKey:'id_type_attraction'});

//Relation entre attraction et service
//db.attraction.belongsToMany(db.service, {through:db.service_attraction});
//db.service.belongsToMany(db.attraction, {through:db.service_attraction});

//Relation entre stand et typeStand
db.type_stand.hasMany(db.stand, {foreignKey:'id_type_stand'});
db.stand.belongsTo(db.type_stand, {foreignKey:'id_type_stand'});

//Relation entre stand et compte
db.compte.hasMany(db.stand, {foreignKey:'id_compte'});
db.stand.belongsTo(db.compte, {foreignKey:'id_compte'});

//Relation entre stand et service
//db.stand.belongsToMany(db.service, {through:db.service_stand});
//db.service.belongsToMany(db.stand, {through:db.service_stand});

// Relation entre Compte et Billet
db.billet.belongsTo(db.compte, {foreignKey: 'id_compte'});
db.billet.hasOne(db.attraction, {foreignKey: 'id_attraction'});
db.compte.hasMany(db.billet, {foreignKey: 'id_compte'});

// Relation entre Emplacement et Attraction
db.attraction.belongsTo(db.emplacement, {foreignKey: 'id_emplacement'});
db.emplacement.hasOne(db.attraction, {foreignKey:'id_emplacement'});

// Relation entre Emplacement et Stand
db.stand.belongsTo(db.emplacement, {foreignKey: 'id_emplacement'});
db.emplacement.hasOne(db.stand, {foreignKey: 'id_emplacement'});


//
//  Tables associatifs
//

// Association AvisAttraction entre Attraction et Compte
/*
db.attraction.belongsToMany(db.compte, {through: db.avis_attraction});
db.compte.belongsToMany(db.attraction, {through: db.avis_attraction});
 */

// Association AvisStand entre Stand et Compte
/*
db.stand.belongsToMany(db.compte, {through: db.avis_stand});
db.compte.belongsToMany(db.stand, {through: db.avis_stand});
*/

export default db;