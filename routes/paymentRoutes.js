const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const isLoggedIn = require('./middlewares/isLoggedIn');

module.exports = app => {
	app.post('/api/stripe', isLoggedIn, async (req, res) => {
		const charge = await stripe.charges.create({
			source: req.body.id,
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 credits'
		});

		req.user.credits += 5;
		const user = await req.user.save();

		res.send(user);
	});
};
