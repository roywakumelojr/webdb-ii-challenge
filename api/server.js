const express = require('express');
const helmet = require('helmet');

const knex = require('../data/dbConfig')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cars', (req, res) =>{
    knex('cars')
    .then(car => {
        res.status(200).json(car)
    }) 
    .catch (err => {
        res.status(500).json({message: 'There was an error retrieving the requested information'})
    })
})

server.put('/api/cars/:id', (req, res) => {
    const changes = req.body;
    knex('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(car => {
    res.status(200).json(car);
    })
    .catch(error => {
    res.status(500).json({message: 'There was an error updating the requested car information' });
    });
});

server.delete('/api/cars/:id', (req, res) => {
    knex('cars')
    .where({ id: req.params.id })
    .del()
    .then(car => {
    res.status(200).json(car);
    })
    .catch(error => {
    res.status(500).json({message: 'There was an error deleting the requested car' });
    });
});

module.exports=server;