const express = require("express")
const router = express.Router();


router.get("/contacts", (req,res) =>{
    res.status(200).json({message: "Get all contacts"})
})

module.exports = router;