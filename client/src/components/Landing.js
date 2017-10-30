import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">Ask any binary question and ask for opinion</span>
						<p className="right">For queries contact: anuj3918@gmail.com</p>
					</div>
					<div className="card-action">
						<ul className="collapsible" data-collapsible="accordion">
							<li>
								<div className="collapsible-header">
									1.&nbsp;Login with Google
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									2.&nbsp;Add credits for free to your account
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									4.&nbsp;Use 4242-4242-4242-4242 as card number
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									5.&nbsp;Put a date in future as expiry and a 3 digit security code
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									6.&nbsp;Go to surveys page and send survey with a binary question
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									7.&nbsp;Come back to check your recipients responses
								</div>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Landing;
