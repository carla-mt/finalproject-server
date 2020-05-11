const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema(
  {
    industry: String,
    talent_id: { type: Schema.Types.ObjectId, ref: 'User' },
    deadline: Date,
    title: String,
    question: String,
    answers: {
      type: [String],
      maxlength: 5,
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
);

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
