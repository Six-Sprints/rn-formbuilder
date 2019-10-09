import React from 'react';
import { TouchableNativeFeedback, ActivityIndicator, View, Text } from 'react-native';

export const AsyncButton = ({ formData, formikProps, isLoading }) => {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(formData.button.btnRippleColor)}
            onPress={formikProps.handleSubmit}>
            <View style={formData.button.btnStyle}>
                {isLoading ? (
                    <ActivityIndicator animating={true} size="small" color={formData.button.loaderColor.color} />
                ) : (
                        <Text style={formData.button.btnTextStyle}>{formData.button.label}</Text>
                    )}
            </View>
        </TouchableNativeFeedback>
    );
};