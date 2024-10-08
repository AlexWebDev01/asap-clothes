import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.components';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

import {
  SignInContainer,
  ButtonContainer,
  ErrorContainer,
} from './sign-in-form.styles';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { AUTH_ERROR_MESSAGES } from '../../utils/firebase/firebase.utils';
import { FirebaseError } from 'firebase/app';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { currentUser, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </ButtonContainer>
        {error && (
          <ErrorContainer>
            {AUTH_ERROR_MESSAGES[
              (error as FirebaseError).code as keyof typeof AUTH_ERROR_MESSAGES
            ] ?? 'Something went wrong'}
          </ErrorContainer>
        )}
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
