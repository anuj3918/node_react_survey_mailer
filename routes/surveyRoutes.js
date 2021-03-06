const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const isLoggedIn = require('./middlewares/isLoggedIn');
const hasCredits = require('./middlewares/hasCredits');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

	app.get('/api/surveys', isLoggedIn, async (req, res) => {
		const surveys = await Survey.find({ _user: req.user.id })
			.select({ recipients: false });

		res.send(surveys);
	});

	app.post('/api/surveys/webhooks', (req, res) => {

		const p = new Path('/api/surveys/:surveyId/:choice');

		_.chain(req.body)
			.map(({ email, url }) => {
				if(url) {
					//	p.test() return null if it cannot find surveyId and choice 
					const match = p.test(new URL(url).pathname);
					if (match) {
						return {
							email,
							surveyId: match.surveyId,
							choice: match.choice
						}
					}
				}
				return undefined;
			})
			.compact()
			.uniqBy('email', 'surveyId')
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne({
					_id: surveyId,
					recipients: {
						$elemMatch: { email: email, responded: false }
					}
				}, {
					$inc: { [choice]: 1 },
					$set: { 'recipients.$.responded': true },
					lastResponded: new Date()
				}).exec();
			})
			.value();

		res.send({});
	});

	app.get('/api/surveys/:surveyId/:choice', (req, res) => {
		res.send('Thanks for voting!');
	});

	app.post('/api/surveys', isLoggedIn, hasCredits, async (req, res) => {
		const { title, body, subject, recipients } = req.body;

		const survey = new Survey({
			title,
			body,
			subject,
			recipients: recipients.split(',').map(email => {
				return { email: email.trim() };
			}),
			_user: req.user.id,
			dateSent: new Date()
		});

		const mailer = new Mailer(survey, surveyTemplate(survey));
		
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();
			
			res.send(user);
		} catch(err) {
			res.status(422).send(err);
		}
		
	});
};
