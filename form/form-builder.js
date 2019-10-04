import { FormInput } from './form-input/text-input';
import Formik from 'formik';
import { View } from 'react-native';
import { AsyncButton } from './form-input/async-button';
export const FormBuilder = ({ formData }) => {
    <Formik
        initialValues={formData.METADATA.initialValues}
        onSubmit={formData.EVENTS.onSubmit}
        validationSchema={formData.METADATA.validationSchema}>
        {formikProps => (
            <View style={formData.THEME.default}>
                {formData.FORMDATA.map(field => {
                    <FormInput
                        placeholder={field.placeholder}
                        placeholderTextColor={AppConstants.THEME.BLACK}
                        formikProps={formikProps}
                        formikKey={field.key}
                        type={field.type}
                    />
                })}
                <AsyncButton
                    label={formData.ACTIONS.key}
                    formikProps={formikProps}
                    isLoading={this.state.loading}
                />
            </View>
        )}
    </Formik>
}