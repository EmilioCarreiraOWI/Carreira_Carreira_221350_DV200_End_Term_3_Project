const express = require('express')

const GameSchema = require('../models/games')

const router = express();

//Get All
router.get('/api/games/', async (req, res) => {
    const findGame = await GameSchema.find();
    res.json(findGame)
})

//Get Single
router.get('/api/games/:id', async (req, res) => {
    const findGame = await GameSchema.findById(req.params.id);
    res.json(findGame)
})

//Update
router.put('/api/games/:id', async (req, res) => {
    const { id } = req.params.id
    await GameSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Create
router.post('/api/games', async (req, res) => {
    const game = new GameSchema({ ...req.body });
    await game.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/games/:id', async (req, res) => {
    const { id } = req.params.id
    await GameSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router