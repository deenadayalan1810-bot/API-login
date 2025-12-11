import express from "express";

import { 
    iplIndex,
    iplCreator,
    iplUpdate,
    iplDetails,
    iplDelete
 } from "../controller/iplController.js";

const router = express.Router();

router.get("/", iplIndex)

router.get("/:id", iplDetails)

router.post("/", iplCreator)

router.put("/:id", iplUpdate)

router.delete("/:id", iplDelete)

export default router