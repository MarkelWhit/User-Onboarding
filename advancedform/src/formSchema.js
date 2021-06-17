import React from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required')
        .min(6, 'Username must be 6 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Must be a valid password'),
    terms: yup.boolean()
    .oneOf([true],'Must agree to "Terms of Service" to onboard')
    .required('Must agree to terms to onboard user'),
})

export default formSchema