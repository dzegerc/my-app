import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Section from '../../components/Section/Section';
import Loader from '../../components/Loader/Loader';
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
import { loginUser } from '../../api/login';

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
    onSubmit: async (values, {resetForm }) => {
        setIsLoading(true);
        setIsError(false);
        setIsRequestFiished(false);

        try {
        const response = await loginUser(values);
        const users = await getAllUsers(response.token);
        const isAdmin = users.find(user => user.email === values.email).isAdmin;

        localStorage.setItem("authToken", response.token);
        localStorage.setItem("isAdmin", response.isAdmin);
        setSuccessMessage("You've registered, welcome!");

        resetForm({});
        setTimeout(() => {
            setIsRequestFiished(false);
        }, 4000);

        } catch (error) {
            setIsError(true);  
            setSuccessMessage("Something wrong.");
 
        } finally {
            setIsLoading(false);
            setIsRequestFiished(true);
        }
    }); 

    return (
        <>
            <Title>Login</Title>
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
                         {formik.touched.email && formik.errors.email
                            ? <InputError>{formik.errors.email}</InputError>
                            : null
                        }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText
                                id='password'
                                type='text'
                                {...formik.getFieldProps('password')}
                            />
                             {formik.touched.password && formik.errors.password
                            ? <InputError>{formik.errors.password}</InputError>
                            : null
                        }
                        </FormRow>
                        <ButtonSubmit type="login">Login</ButtonSubmit>
                    </Form>
                : <Loader />
            }
        </Section> 
        </>
    );
}
export default Login;