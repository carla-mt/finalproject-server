const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema(
  {
    industry: String,
    // talent_id: String,
    deadline: Date,
    title: String,
    body: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
