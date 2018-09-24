import React from 'react';
import './login.less';

import Button from '../../components/button/button.jsx';

export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const {email, password} = this.state;
        const isDisabled = this.validate();
        console.log(isDisabled);

        return (
            <div className='login'>
                <div className='login__title'>
                    Добро пожаловать
                </div>
                <form className='login__form' onSubmit={this.handleSubmit}>

                    <div className='login__form-input'>
                        <input
                            data-field-name={'email'}
                            type={'text'}
                            onChange={this.handleChange}
                            placeholder={'Почта'}
                            value={email}
                        />
                    </div>

                    <div className='login__form-input'>
                        <input
                            data-field-name={'password'}
                            type={'text'}
                            onChange={this.handleChange}
                            placeholder={'Пароль'}
                            value={password}
                        />
                    </div>

                    <div className='login__form-button'>

                        <Button
                            text={'Войти'}
                            isDisabled={!isDisabled}
                            style={'success'}
                            type={'submit'}
                        />

                    </div>
                </form>
            </div>
        );
    }

    testEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    testPassword(password) {
        return !!password && password.length >= 4;
    }

    validate() {
        const { email, password } = this.state;

        console.log('validate', email, password);

        if (!this.testPassword(password)) {
            return false;
        }
        if (!this.testEmail(email)) {
            return false;
        }

        return true;
    }

    handleChange(e) {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.dataset.fieldName;

        this.setState({
            [fieldName]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}
