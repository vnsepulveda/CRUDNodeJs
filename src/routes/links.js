const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add');
})

router.post('/add', async(req, res) => {
    const { titulo, url, descripcion } = req.body;
    const nuevoLink = {
        titulo,
        url,
        descripcion
    };
    await pool.query('INSERT INTO links set ?', [nuevoLink], function(err, result) {
        console.log('insert');
        if (err) throw err;
    });
    res.redirect('/links');
})

router.get('/', async(req, res) => {
    let consultaSQL = 'SELECT * FROM links';
    await pool.query(consultaSQL, function(err, result) {
        res.render('links/list', { result });
    });
})

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id])
    res.redirect('/links');

})

module.exports = router;