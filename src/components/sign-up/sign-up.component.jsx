import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {

        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert(`Passords don't match`);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }

    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className='sign-up'>
                <h2 className='title'>
                    I do not have an account
                </h2>
                <span>
                    Sign up with your email and password
                </span>
                <form className='sign-up-fo brm' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName"
                        type="text"
                        handleChange={this.handleChange}
                        label='Display Name'
                        value={displayName}
                        required />

                    <FormInput name="email"
                        type="email"
                        handleChange={this.handleChange}
                        label='Email'
                        value={email}
                        required />

                    <FormInput name="password"
                        type="password"
                        handleChange={this.handleChange}
                        label='Password'
                        value={password}
                        required />

                    <FormInput name="confirmPassword"
                        type="password"
                        handleChange={this.handleChange}
                        label='ConfirmPassword'
                        value={confirmPassword}
                        required />

                    {/* <div className='buttons'> */}
                    <CustomButton type="submit">Sign Up</CustomButton>
                    {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                        Sign In with google{' '}
                        </CustomButton> 
                    </div>  */}
                </form>
            </div >
        );
    }
}

export default SignUp;
