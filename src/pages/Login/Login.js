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
    ButtonSubmit,
    successMessage
} from '../../lib/style/generalStyles';
 import {loginUser} from '../../api/login';
 import { getAllUsers } from '../../api/user'; 
import { values } from 'lodash';

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
    onSubmit: async  (values, {resetForm}) => {
        setIsLoading(true);
        setIsError(false);
        setIsRequestFiished(false);


        try {
        const response = await loginUser(values);
        const users = await getAllUsers(response.token);
        const isAdmin = users.find(user => user.email === values.email).isAdmin;

        localStorage.setItem("authToken", response.token);
        localStorage.setItem("isAdmin", response.isAdmin);
        setSuccessMessage


            
        } catch (error) {
            setIsError(true);   
        } finally {
            setIsLoading(false);
        }
        


        setIsLoading(false);
      }
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