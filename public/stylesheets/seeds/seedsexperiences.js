const mongoose = require('mongoose');
const Experience = require('../models/experience');

mongoose
  .connect(`${process.env.DBURL}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Experience.insertMany(experiences);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const experiences = [
  {
    industry: "UX / UI Design",
    // talent_id: String,
    deadline: '2020-06-05',
    title: "Portfolio review",
    body: "I would like to receive feeback about my portfolio",
  },

  {
    industry: String,
    // talent_id: String,
    deadline: Date,
    title: String,
    body: String,
  },
]
