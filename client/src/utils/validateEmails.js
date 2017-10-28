const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
	const emailsArray = emails.split(',');

	if(emailsArray.length > 6) {
		return "Don't exploit the service. Please enter maximum of 6 recipients";
	}

	const invalidEmails = emailsArray.map(email => email.trim())
		.filter(email => re.test(email) === false);

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}
};
