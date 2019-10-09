import { Formik } from 'formik';
import { View } from 'react-native';
import React, { Component } from 'react';
import { FormInput } from './form-input/text-input';
import { createYupSchema } from "./yupSchemaCreator";
import * as yup from 'yup';
import { AsyncButton } from '../form/form-input/async-button';

class FormBuilder extends Component {
    constructor(props) {
        super(props);
    }
    renderFormElements = (formData, props) =>
        formData.arr.map((item, index) => {
            let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
            return (
                <FormInput
                    placeholder={item.placeholder}
                    label={item.label}
                    formikProps={props}
                    formikKey={item.id}
                    type={item.type}
                    value={props.values[item.id]}
                    key={index}
                    error={error}
                    style={item.style}
                    errorStyle={formData.errorStyle}
                />
            );
        });

    render() {
        const { formData } = this.props;
        const initialValues = {};
        formData.arr.forEach(item => {
            initialValues[item.id] = item.value || "";
        });
        const yepSchema = formData.arr.reduce(createYupSchema, {});
        const validateSchema = yup.object().shape(yepSchema);

        return (
            <View style={formData.screen}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={(values, actions) => { this.props.onSubmit(values) }}>
                    {formikProps => (
                        <View>
                            {this.renderFormElements(formData, formikProps)}
                            <AsyncButton formData={formData} formikProps={formikProps} isLoading={this.props.isLoading} />
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

export default FormBuilder;
