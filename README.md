# Survey Mailer

**Brief:** This is a full-stack project to send out surveys to people and record their responses.

**Working demo:** https://polar-waters-95942.herokuapp.com/

-----------------------------

**Description:**
a) Node.Js and express to handle backend routes and user requests.
b) Google Oauth2.0 along with passport to authenticate users.
c) mLab (MongoDB as a service) for storing data of users.
d) Stripe for carrying out a dummy card payments.
e) React and Redux for frontend.

-----------------------------

**Technologies:**

Backend: Node.js, Express, MongoDB

Frontend: React with Redux

Services: Google Oauth2.0, Stripe, Sendgrid

-----------------------------

**Steps:**

a) Clone the repository and navigate inside it.
b) Execute 'npm install'. This will install backend dependencies.
c) Execute 'cd client' and run 'npm install'. This will install frontend dependencies.
c) Open sendgrid_webhook.sh and replace MY_UNIQUE_USERNAME with any other string.
c) Open config/dev.js and fill out all the keys in it.
  - Navigate to [Google Developer Console](https://console.developers.google.com/) to create a new project, enable Google+ oauth API and enter the ClientID and ClientSecret provided.
  - Navigate to [mLab](https://mlab.com/) to create an account. Create a new user for your db and get the MongoDB URI.
  - Go to [Stripe](https://stripe.com/), create an account and get PublishableKey and SecretKey
  - Visit [Sendgrid](https://sendgrid.com/) to create an account and get SendgridKey. 
  - In the redirectDomain, enter the url of your app, something like 'http://localhost:3000' or https://myNewApp.com
d) Execute 'npm run start'.
e) On your terminal window, a URL will be displayed by localtunnel which can be used to connect your local app to internet. Copy this Url.
f) In Sendgrid dashboard, go to Settings -> Event Notification and turn it on. Paste this Url into HTTP Post Url like 'http://MY_UNIQUE_USERNAME.com/api/surveys/webhooks'. Save the settings.
g) Browse the app.

-----------------------------

**Usage:**

This project allows you to send email to your friends asking them a binary question. You can tweak this project to your needs. Feel free to tweak it and create your own working application.

-----------------------------

**Author**

Anuj Gupta (anuj3918@gmail.com)

-----------------------------

**License**

This project is licensed under the ISC license.