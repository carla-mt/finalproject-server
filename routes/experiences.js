/* eslint-disable no-underscore-dangle */
const express = require('express');
const Experiences = require('../models/experience');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

//router.use(checkIfLoggedIn);

// GET experiences page
router.get('/', (req, res) => {
	Experiences.find()
		.then(experiences => {
			console.log('listing experiences');
			res.json(experiences);
		})
		.catch(err => console.log('Error while listing Experiences: ', err));
});

// GET /experiences/:id/update
router.get('/:id/update-experience', (req, res, next) => {
	const { id } = req.params;
	Experiences.findById(id)
		.then(experienceInfo => {
			res.render('update-experience', { experienceInfo })
		})
		.catch(next);
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

// POST delete experience
router.delete('/:id', (req, res, next) => {
	console.log(req.params.id);
	Experiences.findByIdAndDelete(req.params.id)
		.then((experience) => {
			res.json(experience);
		})
		.catch(next);
})

// POST /experience/:id/update
router.post('/:id/update-experience', (req, res, next) => {
	//const { id } = req.params;
	const {
		industry,
		deadline,
		title,
		body
	} = req.body;
	console.log('body', req.body)
	Experiences.findByIdAndUpdate(req.params.id, {
		industry,
		deadline,
		title,
		body
	})
		.then(() => {
			console.log(experience)
			res.json(experience);
		})
		.catch(next);
})


module.exports = router;
