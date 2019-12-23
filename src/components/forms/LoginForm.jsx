import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineErrors from '../messages/InlineErrors';

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			dataForm: {
				email: '',
				password: ''
			},
			isLoading: false,
			errors: {}
		};
	}
	handleChangeForm = event => {
		const { name, value } = event.target;

		this.setState({
			dataForm: { ...this.state.dataForm, [name]: value }
		});
		console.log(value);
    };
    
    onSubmit = () => {
        const errors = this.validate(this.state.dataForm);
		this.setState({errors});
		
		if(Object.keys(errors).length === 0){
			this.props.submit(this.state.dataForm);
		}

    }

    validate = (dataForm) => {
		const errors = {}
		if(!Validator.isEmail(dataForm.email)) errors.email = 'Invalid email'
        if(!dataForm.password) errors.password = 'Password can not be blank'
        return errors;
    }
	render() {
		const {
			dataForm: { email, password },
			isLoading,
			errors
		} = this.state;
		return (
			<Form onSubmit = {this.onSubmit} className = 'ui container'>
				<Form.Field error = {!!errors.email}>
					<label htmlFor='email'>Email</label>
					<input
                        type = 'text'
						name='email'
						value={email}
						id='email'
						placeholder='example@example.com'
						onChange={this.handleChangeForm}
					/>
					{errors.email && <InlineErrors text = {errors.email}/>}
				</Form.Field>
				<Form.Field error = {!!errors.password}>
					<label htmlFor='password'>Password</label>
					<input
                        type = 'password'
						name='password'
						value={password}
						id='password'
						placeholder='Your password should be 8 characters'
						onChange={this.handleChangeForm}
					/>
					{errors.password && <InlineErrors text = {errors.password}/>}
				</Form.Field>
				<Button pramiry>Login</Button>
			</Form>
		);
	}
}

export default LoginForm;
