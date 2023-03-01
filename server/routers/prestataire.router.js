import express from "express";
import {getPrestataires, getPrestataireByID}
    from "../controllers/prestataire.controller.js";
let prestataire_router = express.Router();

/**
 * @swagger
 * /prestataires:
 *  get:
 *      summary: Obtains all prestataires
 *      tags:
 *          - Prestataires
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description: Bad Request
 */
prestataire_router.get("/", getPrestataires);

prestataire_router.get("/:id", getPrestataireByID);


export default prestataire_router;

