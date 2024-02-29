const express = require("express");
const router = express.Router();


const {creatEmail} = require('../controller/userContriler')
router.post("/creatEmail", () => creatEmail);

module.exports =router;  