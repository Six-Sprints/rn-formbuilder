import { FormInput } from './form-input/text-input';
import Formik from 'formik';
import { View, Button } from 'react-native';
import { AsyncButton } from './form-input/async-button';
export const FormBuilder = ({ formData }) => {
    <Formik
        initialValues={formData.METADATA.initialValues}
        onSubmit={formData.EVENTS.onSubmit}
        validationSchema={formData.METADATA.validationSchema}>
        {formikProps => (
            <View>
                {formData.FORMDATA.map(field => {
                    <FormInput
                        placeholder={field.placeholder}
                        formikProps={formikProps}
                        formikKey={field.key}
                        type={field.type}
                    />
                })}
                <Button title={formData.ACTIONS.key} onPress={() => { }} />
            </View>
        )}
    </Formik>
}