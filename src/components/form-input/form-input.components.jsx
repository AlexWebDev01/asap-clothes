import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className='input-group'>
            <input className='form-input' {...inputOptions} />
            {
                label && (
                <label 
                    className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;