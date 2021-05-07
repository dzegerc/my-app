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

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name is required'),
            lastName: Yup.string()
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 caharacters long')
                .required('Password is required'),
            passwordConfirmation: Yup.string()
                .test(
                    'passwords-match',
                    'password must match',
                    function (value) {
                        return this.parent.password === value
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
                        <InputLabel htmlFor='firstName'>First name</InputLabel>
                        <InputText 
                            id='firstName'
                            type='text'
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName
                            ? <InputError>{formik.errors.firstName}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='lastName'>Last name</InputLabel>
                        <InputText
                            id='lastName'
                            type='text'
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName
                            ? <InputError>{formik.errors.lastName}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <CheckboxWrapper>
                            <InputCheckbox
                                id='isAdmin'
                                type='checkBox'
                                {...formik.getFieldProps('isAdmin')}
                            />
                            <InputLabel htmlFor='isAdmin' isCheckbox={true}>Register as Admin</InputLabel>
                        </CheckboxWrapper>
                    </FormRow>
                </Form>
                : <DataLoader/>
            }
        </Section>
    </>
);
}
export default Register;