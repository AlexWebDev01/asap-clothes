import {BaseButton, GoogleSigniInButton, InvertedButton, ButtonSpinner} from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSigniInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);




const Button = ({ children, buttonType, isLoading, ...inputOptions }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton disabled={isLoading} {...inputOptions}>
                {isLoading? <ButtonSpinner /> : children}
            </CustomButton>;
};

export default Button;