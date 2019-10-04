import { View, Text } from 'react-native';
import { formStyle } from '../../styles/forms';

export const FormWrapper = ({ children, formikProps, formikKey }) => {
    return (
        <View>
            {children}
            {formikProps.errors[formikKey] && (
                <Text>
                    {formikProps.errors[formikKey]}
                </Text>
            )}
        </View>
    );
};
