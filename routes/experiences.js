/* eslint-disable no-underscore-dangle */
const express = require('express');
const Experiences = require('../models/experience');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

//router.use(checkIfLoggedIn);

// GET experiences form page "create"
router.get('/experiences', (req, res, next) => {

	res.status(200).json({});
})

// POST create new experience
router.post('/', (req, res, next) => {
	//const { currentTalent } = req.session;
	const {
		industry,
		deadline,
		title,
		body,
	} = req.body;
	Experiences.create({
		industry,
		deadline,
		title,
		body,
	})
		.then((experience) => {
			console.log(experience)
			res.json(experience);
		})
		.catch(next);
})

module.exports = router;
