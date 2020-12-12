const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newResponse = req.body;
    console.log(`Adding Response`, newResponse);

    let queryText = `INSERT INTO "feedback" ("name", "feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newResponse.name, newResponse.feeling,
    newResponse.understanding, newResponse.support, newResponse.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new response`, error);
            res.sendStatus(500);
        });
});

module.exports = router;