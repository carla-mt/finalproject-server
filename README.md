# Project Name

## Instructions how to start

create `.env` file like the example `.env.sample`

start with `npm run start-dev`

**http://localhost:5000**

## Description

This app is the link between new talent who needs different kind of mentorship and senior professional willing to share their expertise.

## Motivation

Help recent graduated students to jump to the professional market

## User Stories

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup

**Sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend

**Login** - As a user I want to be able to log in on the webpage so that I can get back to my account

**Logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

**Events list** - As a user I want to see all the events available so that I can choose which ones I want to attend

**Events create** - As a user I want to create an event so that I can invite others to attend

**Events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend

**Attend event** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile: - see my profile - upload my profile picture - see other users profile - list of events created by the user - list events the user is attending

Geo Location: - add geolocation to events when creating - show event in a map in event detail page - show all events in a map in the event list page

Homepage: - …

## ROUTES:

### Endpoints

| Method | Path         | description     | Body |
| :----: | ------------ | --------------- | ---- |
|  GET   | `/protected` | protected route |      |

### Auth

| Method | Path      | description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | who am i       |                          |
|  POST  | `/signup` | signup a user  | `{ username, password }` |
|  POST  | `/login`  | login a user   | `{ username, password }` |
|  GET   | `/logout` | logout session |                          |

## Models

User model

```javascript

Mentor Model
email: {
		type: String,
		required: true,
		unique: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	image: { type: String, },
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	industry: {
		type: String,
		required: true,
	}

	yearsOfExperience: {
		type: Number,
		required: true,
	},
	languages: {
		type: Array,
		required: true
	},

	Talent Model
	email: {
		type: String,
		required: true,
		unique: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	image: { type: String, },
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	industry: {
		type: String,
		required: true,
	},
	languages: {
		type: Array,
		required: true
	},

```

models
```javascript

Questions

	industry: String,
	talent_id: String,
	deadline: Date,
	description: {
		title: String,
	
}
```

## Links

### Trello

https://trello.com/b/UiSHj0Vz/finalproject

### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com/)

[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)
