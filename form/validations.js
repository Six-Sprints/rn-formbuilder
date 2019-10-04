import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required()
        .email()
        .label('*email'),
    password: yup
        .string()
        .trim()
        .required()
        .label('*password')
        .min(8, 'must have atleast 8 characters'),
});

export const registerValidationSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required()
        .label('*name'),
    email: yup
        .string()
        .trim()
        .required()
        .email()
        .label('*email'),
    password: yup
        .string()
        .trim()
        .required()
        .label('*password')
        .min(8, 'must have atleast 8 characters'),
    confirmPassword: yup
        .string()
        .required('*password is a required field')
        .label('Confirm password')
        .test('passwords-match', 'Password must match', function (value) {
            return this.parent.password === value;
        }),
});
