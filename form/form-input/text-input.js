import React from 'react';
import { View, Text, TextInput, Switch, CheckBox } from 'react-native';
import { FormWrapper } from '../../../npm-package/form/form-wrapper';
import { FormFieldConstants } from '../form-constants';


export const FormInput = ({ label, type, formikProps, formikKey, errorStyle, ...rest }) => {
    const renderSwitch = param => {
        switch (param) {
            case FormFieldConstants.NUMBER:
                return <TextInput
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    keyboardType='number-pad'
                    {...rest}
                />
            case FormFieldConstants.EMAIL:
                return <TextInput
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    keyboardType='email-address'
                    {...rest}
                />
            case FormFieldConstants.TEXTAREA:
                return <TextInput
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    multiline
                    keyboardType='email-address'
                    {...rest}
                />
            case FormFieldConstants.PASSWORD:
                return <TextInput
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    secureTextEntry
                    {...rest}
                />
            case FormFieldConstants.SWITCH:
                return <Switch
                    value={formikProps.values[formikKey]}
                    onValueChange={value => {
                        formikProps.setFieldValue(formikKey, value)
                    }}
                    {...rest}
                />
            case FormFieldConstants.CHECKBOX:
                return <CheckBox
                    value={formikProps.values[formikKey]}
                    onValueChange={value => {
                        formikProps.setFieldValue(formikKey, value)
                    }}
                    {...rest}
                />
            default:
                return <TextInput
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    value={formikProps.values[formikKey]}
                    keyboardType='default'
                    {...rest}
                />
        }
    }
    return <FormWrapper label={label} formikProps={formikProps} formikKey={formikKey} errorStyle={errorStyle}>
        <View>
            {label && <Text>{label}</Text>}
            {renderSwitch(type)}
        </View>
    </FormWrapper>
}
