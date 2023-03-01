import express from 'express';
import {authentificate, createAccount, getAccountByID} from "../controllers/compte.controller.js";
import {inscriptionValidation} from "../middlewares/inscription-validation.js";

let compte_router = express.Router();

compte_router.get("/:id", getAccountByID)

compte_router.post("/connexion",authentificate)
compte_router.post("/inscription", inscriptionValidation, createAccount);

export default compte_router;