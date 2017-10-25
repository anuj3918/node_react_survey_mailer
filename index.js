const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//	Middlewares for every single incoming req
app.use(cookieSession({
	maxAge: 30*24*60*60,
	keys: [keys.cookieKey]
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


//	Handling routes
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);

//	Spinning up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('server running on port : ' + PORT);
});
