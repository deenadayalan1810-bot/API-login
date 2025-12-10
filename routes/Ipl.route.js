import express from "express";

import { 
    iplIndex,
    iplCreator,
    iplUpdate,
    iplDelete
 } from "../controller/iplController.js";

const router = express.Router();

router.get("/", iplIndex)

router.post("/", iplCreator)

router.put("/:id", iplUpdate)

router.delete("/:id", iplDelete)

export default router