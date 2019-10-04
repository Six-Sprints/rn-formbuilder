import {
    TouchableNativeFeedback,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { formStyle } from '../../styles/forms';
import { AppConstants } from '../../utils/app-constants';

export const AsyncButton = ({ label, formikProps, isLoading }) => {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(AppConstants.THEME.BLACK)}
            onPress={formikProps.handleSubmit}>
            <View style={formStyle.button}>
                {isLoading ? (
                    <ActivityIndicator animating={true} size="small" color="black" />
                ) : (
                        <Text style={formStyle.buttonText}>{label}</Text>
                    )}
            </View>
        </TouchableNativeFeedback>
    );
};
