import express from 'express';
import {getAllBillets,getBilletsByIDCompte,postBillet} from "../controllers/billet.controller.js";
let billet_router = express.Router();

billet_router.get("/", getAllBillets);
billet_router.get("/:id", getBilletsByIDCompte);

billet_router.post("/post/:id", postBillet);

export default billet_router;