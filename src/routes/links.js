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
    res.send('Recibido');
})

router.post('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM links ');
    console.log(links);
    res.send('Listas');
})

module.exports = router;