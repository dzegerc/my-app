import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Section from '../../components/Section/Section';
import DataLoader from '../../components/DataLoader/DataLoader';
import {
    Title,
    Form,
    FormRow,
    CheckboxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    ButtonSubmit
} from '../../lib/style/generalStyles';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 caharacters long')
                .required('Password is required'),
            }
        )
}),
    onSubmit: values => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            alert(JSON.stringify(values));
        }, 1000);
      },
    }); 

    return (
        <>
            <Title>Register</Title>
            <Section withoutTopPadding={true}>
                {!isLoading
                     ? <Form onSubmit={formik.handleSubmit}>
                     <FormRow>
                         <InputLabel htmlFor='email'>Email</InputLabel>
                         <InputText 
                             id='email'
                             type='text'
                             {...formik.getFieldProps('email')}
                         />
                         {formik.touched.firstName && formik.errors.firstName
                            ? <InputError>{formik.errors.firstName}</InputError>
                            : null
                        }
                        </FormRow>
                }