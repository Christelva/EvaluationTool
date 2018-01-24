const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  latestCode: {type: Number, required: true, default: 1},
  date: { type: Date, required: true },
  evaluationRemarks: { type: String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('evaluations', evaluationSchema)
