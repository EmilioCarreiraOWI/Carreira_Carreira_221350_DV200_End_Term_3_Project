const express = require('express')

const MusicSchema = require('../models/games')

const router = express();

//Get All
router.get('/api/games/', async (req, res) => {
    const findMusic = await MusicSchema.find();
    res.json(findMusic)
})

//Get Single
router.get('/api/games/:id', async (req, res) => {
    const findMusic = await MusicSchema.findById(req.params.id);
    res.json(findMusic)
})

//Update
router.put('/api/games/:id', async (req, res) => {
    const { id } = req.params.id
    await MusicSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Create
router.post('/api/games', async (req, res) => {
    const music = new MusicSchema({ ...req.body });
    await music.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/games/:id', async (req, res) => {
    const { id } = req.params.id
    await MusicSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router