const mongoose = require('../config/database')
const { Schema } = mongoosechema({

  const studentAchema = new Schema ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true, default: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff'},
    latestCode: { type: String },
    evaluationRemarks: { type: Text },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  const batchSchema = new Schema({
    name: { type: String, required: true },
    batch: { type: Number },
    startDate: { type: Date, default: Date.now, required: true },
    endDate:  { type: Date, default: Date.now, required: true },
    students: [studentSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
 module.exports = mongoose.model('batches', batchSchema)
