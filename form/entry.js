import React from 'react';
import FormBuilder from './form-builder';


export const RNForm = ({ form, onSubmit, isLoading }) => {
    return <FormBuilder formData={form} onSubmit={onSubmit} isLoading={isLoading} />
}