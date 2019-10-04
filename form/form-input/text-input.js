import React from 'react';
import { TextInput } from 'react-native';
import { formStyle } from '../../styles/forms';
import { FormWrapper } from '../form-wrapper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export const FormInput = ({ label, type, formikProps, formikKey, ...rest }) => {
    let field = '';
    switch (type) {
        case FormFieldConstants.EMAIL:
            field =
                <TextInput
                    // style={formStyle.inputBox}
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    keyboardType='email-address'
                    {...rest}
                />
            break;
        case FormFieldConstants.NUMBER:
            field =
                <TextInput
                    // style={formStyle.inputBox}
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    keyboardType='number-pad'
                    {...rest}
                />
            break;
        case FormFieldConstants.PASSWORD:
            field =
                <TextInput
                    // style={formStyle.inputBox}
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    secureTextEntry={true}
                    {...rest}
                />
            break;
        case FormFieldConstants.CHECKBOX:
            field = <CheckBox />
            break;
        case FormFieldConstants.RADIO:
            field = <RadioButton />
            break;
        case FormFieldConstants.TEXTAREA:
            field =
                <TextInput
                    style={formStyle.inputBox}
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    secureTextEntry={true}
                    multiline
                    {...rest}
                />
            break;
        case FormFieldConstants.SWITCH:
            field = <Switch />
            break;
        case FormFieldConstants.BUTTON:
            field = <Button />
            break;
        case FormFieldConstants.LOADING_BUTTON:
            field = <Button />
            break;
        default: field = <TextInput
            keyboardType='default' />
            break;
    }
    return <FormWrapper label={label} formikProps={formikProps} formikKey={formikKey}>
        {field}
    </FormWrapper>
};

