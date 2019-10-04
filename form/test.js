import { validationSchema } from './validations'
import { FormFieldConstants } from './form-constants';
export const formData = {
    FORMDATA: [
        {
            key: 'email',
            placeholder: 'Enter the email',
            type: FormFieldConstants.EMAIL,
        },
        {
            key: 'password',
            placeholder: 'Enter the password',
            type: FormFieldConstants.PASSWORD,
        }],
    METADATA: {
        initialValues: [{ user: { email: '', password: '' } }],
        validationSchema: { validationSchema }
    },
    EVENTS: {
        onSubmit: {},
    },
    ACTIONS: {
        key: 'Login'
    }
};
