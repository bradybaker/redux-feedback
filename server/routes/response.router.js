const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "date" DESC;'
    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in router GET', err)
            res.sendStatus(500)
        })
})

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

router.delete('/:id', (req, res) => {
    let queryText = `DELETE FROM "feedback" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error deleting response', error);
            res.sendStatus(500);
        })
})

module.exports = router;