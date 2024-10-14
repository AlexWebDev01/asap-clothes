import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.components';
import Button from '../button/button.component';

import { signUpFailed, signUpStart } from '../../store/user/user.action';

import { SignUpContainer } from './sign-up-form.styles';
import { SIGN_UP_ERROR_MESSAGES } from '../../utils/firebase/firebase.utils';
import { RootState } from '../../store/store';
import { FirebaseError } from 'firebase/app';
import { ErrorContainer } from '../sign-in-form/sign-in-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { error } = useSelector((state: RootState) => state.user);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      dispatch(
        signUpFailed(
          new FirebaseError('auth/passwords-dont-match', 'custom error'),
        ),
      );

      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      console.log('user sign up failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <ErrorContainer>
        {error &&
          SIGN_UP_ERROR_MESSAGES[
            (error as FirebaseError).code as keyof typeof SIGN_UP_ERROR_MESSAGES
          ]}
      </ErrorContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
