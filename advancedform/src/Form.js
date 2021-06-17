import React from 'react'

export default function Form(props) {
   const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        evt.persist()
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }


    return (
        <form className='User form' onSubmit={onSubmit}>
            <div className='form submit'>
                <h2>User Onboarding</h2>
            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <label>Username
                <input
                value={values.username}
                onChange={onChange}
                name='username'
                type='text'
                />
            </label>
            <label>Email
                <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='email'
                />
            </label>
            <label>Password
                <input
                value={values.password}
                onChange={onChange}
                name='password'
                type='password'
                />
            </label>
            <label> 'Terms of Service'
                <input
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={onChange}
                />
            </label>

                <button disabled={disabled}>Create User</button>
            </div>
            <br/>
        </form>
    
    )
}