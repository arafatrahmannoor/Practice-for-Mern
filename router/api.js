const express = require('express');
const router = express.Router();



router.get('/api', (req, res)=>{
    res.json({message: "API Endpoint"});
});

module.exports = router;