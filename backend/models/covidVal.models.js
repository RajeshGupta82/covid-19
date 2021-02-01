const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
  username:{type:String, required:true},
  description:{type:String}
})

const VaccVal = mongoose.model('VaccVal',vaccineSchema)

module.exports = VaccVal