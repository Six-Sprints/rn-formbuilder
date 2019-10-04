import { View, Text } from 'react-native';

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
