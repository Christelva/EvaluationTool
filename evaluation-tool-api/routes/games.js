// routes/batchs.js
const router = require('express').Router()
const passport = require('../config/auth')
const { Batch } = require('../models')
const utils = require('../lib/utils')

const authenticate = passport.authorize('jwt', { session: false })

module.exports = io => {
  router
    .get('/batchs', (req, res, next) => {
      Batch.find()
        // Newest batchs first
        .sort({ createdAt: -1 })
        // Send the data in JSON format
        .then((batchs) => res.json(batchs))
        // Throw a 500 error if something goes wrong
        .catch((error) => next(error))
    })
    .get('/batchs/:id', (req, res, next) => {
      const id = req.params.id

      Batch.findById(id)
        .then((batch) => {
          if (!batch) { return next() }
          res.json(batch)
        })
        .catch((error) => next(error))
    })
    .post('/batchs', authenticate, (req, res, next) => {
      const newBatch = {
        userId: req.account._id,
        players: [{
          userId: req.account._id,
          pairs: []
        }],
        cards: utils.shuffle('✿✪♦✵♣♠♥✖'.repeat(2).split(''))
          .map((symbol) => ({ visible: false, symbol }))
      }

      Batch.create(newBatch)
        .then((batch) => {
          io.emit('action', {
            type: 'GAME_CREATED',
            payload: batch
          })
          res.json(batch)
        })
        .catch((error) => next(error))
    })
    .put('/batchs/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      const updatedBatch = req.body

      Batch.findByIdAndUpdate(id, { $set: updatedBatch }, { new: true })
        .then((batch) => {
          io.emit('action', {
            type: 'GAME_UPDATED',
            payload: batch
          })
          res.json(batch)
        })
        .catch((error) => next(error))
    })
    .patch('/batchs/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      const patchForBatch = req.body

      Batch.findById(id)
        .then((batch) => {
          if (!batch) { return next() }

          const updatedBatch = { ...batch, ...patchForBatch }

          Batch.findByIdAndUpdate(id, { $set: updatedBatch }, { new: true })
            .then((batch) => {
              io.emit('action', {
                type: 'GAME_UPDATED',
                payload: batch
              })
              res.json(batch)
            })
            .catch((error) => next(error))
        })
        .catch((error) => next(error))
    })
    .delete('/batchs/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      Batch.findByIdAndRemove(id)
        .then(() => {
          io.emit('action', {
            type: 'GAME_REMOVED',
            payload: id
          })
          res.status = 200
          res.json({
            message: 'Removed',
            _id: id
          })
        })
        .catch((error) => next(error))
    })

  return router
}
