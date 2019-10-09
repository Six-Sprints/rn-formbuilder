import { View, Text } from 'react-native';
import React from 'react';

export const FormWrapper = ({ children, formikProps, formikKey, errorStyle }) => {
    return (<View>
        {children}
        {formikProps.errors[formikKey] && (
            <Text style={errorStyle}>
                {formikProps.errors[formikKey]}
            </Text>
        )}
    </View>
    );
};
