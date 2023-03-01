import express from "express";
import {getStands,getStandByID} from "../controllers/stand.controller.js";
import {getTypeStandByID} from "../controllers/stand.controller.js";
let stand_router = express.Router();

stand_router.get("/", getStands);
stand_router.get("/:id", getStandByID);
stand_router.get("/types_stand/", getTypeStandByID);

export default stand_router;