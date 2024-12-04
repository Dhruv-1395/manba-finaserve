const express = require('express');
const router = express.Router();
const usermodel = require('../model/user');
// Define a route for the root URL
router.post('/apply', (req, res) => {
    usermodel.create(req.body)
    .then(result => console.log(result))
    .catch(err => console.log(err))
});

// Export the router
module.exports = router;
