import React from 'react';
import LoginForm from '../../forms/LoginForm';
import {login} from '../../actions/auth'
import { connect } from 'react-redux';
class LoginPage extends React.Component {
	submit = dataForm => {
		console.log(dataForm);
		this.props.login(dataForm).then(()=> this.props.history.push('/'));
	};
	render() {
		return (
			<div>
				<h1>Login Page</h1>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

export default connect(null, {login}) (LoginPage);
