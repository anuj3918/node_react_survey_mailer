import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">What is this app ?</span>
						<p>Create your custom survey and send it out to the world. Ask any binary question and your your recipients will reply in Yes or No</p>
						<p>Read below to send your first survey</p>
					</div>
				</div>
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
							4.&nbsp;Use 4242-4242-42424-4242 as card number
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							5.&nbsp;Put any future expiry date and 3 digit security code
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							6.&nbsp;Go to surveys page and send survey with a binary question
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Landing;
