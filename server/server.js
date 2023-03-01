import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swagger_ui from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import cors from "cors";
dotenv.config();

// Routers
import formulaire_router from "./routers/formulaire.router.js";
import prestataire_router from "./routers/prestataire.router.js";
import attraction_router from "./routers/attraction.router.js";
import compte_router from "./routers/compte.router.js";
import stand_router from "./routers/stand.router.js";
import billet_router from "./routers/billet.router.js";
//


//BDD
import db from "./models/index.js";
try {
    await db.sequelize.authenticate()
}catch (e) {
    console.error(e);
}
//

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

const swagger_options = {
    swaggerDefinition: {
        openapi : "3.0.0",
        info: {
            title: "SAEG9 API Documentation",
            description: "Realised By Group 9",
            servers: [`http://localhost:${port}`],
            version: "1.0"
        }
    },
    apis: ["server.js", "./routers/*.js"]
};

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use("/formulaires", formulaire_router);
app.use("/account", compte_router);
app.use("/prestataires", prestataire_router);
app.use("/attractions", attraction_router);
app.use("/stands", stand_router);
app.use("/billets", billet_router);
app.use("/api-docs", swagger_ui.serve, swagger_ui.setup(swaggerJsDoc(swagger_options)));

app.listen(port, () => {
    console.log(`Listening on port ${port}` );
    db.sequelize.sync().then(r => console.log("yeah"));

});
