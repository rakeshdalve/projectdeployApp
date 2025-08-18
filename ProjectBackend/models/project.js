// models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  imageUrl: { 
    type: String,
    required: false },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // Relates to User collection
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
