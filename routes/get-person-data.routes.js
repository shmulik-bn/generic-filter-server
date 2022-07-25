const express = require("express");
const { getPersonData,  } = require("../controllers/get-person-data.controller");
const router = express.Router();


router.get('/getPersonData', getPersonData);



module.exports = router;