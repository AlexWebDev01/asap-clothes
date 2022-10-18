import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.components";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import { SignInContainer, ButtonContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch(error) {
                console.log('user sign in failed', error);
            }
        };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(e) => handleSubmit}>
                <FormInput 
                    label='Email'
                    type = 'email'
                    required
                    onChange={handleChange}
                    name = 'email'
                    value={email}
                />

                <FormInput 
                    label='Password'
                    type = 'password'
                    required
                    onChange={handleChange}
                    name = 'password' 
                    value={password}
                />
                <ButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign In</Button>
                </ButtonContainer> 
            </form>
        </SignInContainer>
    );
};

export default SignInForm;