import { FORM_ERROR } from 'final-form'
import React, { useContext } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import { combineValidators, isRequired } from 'revalidate'
import { Button, Form, Header } from 'semantic-ui-react'
import ErrorMessage from '../../app/common/form/ErrorMessage'
import TextInput from '../../app/common/form/TextInput'
import { IUserFormValues } from '../../app/models/users'
import { RootStoreContext } from '../../app/stores/rootStore'

const validate = combineValidators({
    email: isRequired('email'),
    password: isRequired('password')
})

export const LoginForm = () => {
    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.userStore;
    return (
        <FinalForm
            onSubmit={(values: IUserFormValues) => login(values).catch(error => ({
                [FORM_ERROR]: error
            }))}
            validate={validate}
            render={({ handleSubmit, submitting, submitError, invalid, pristine, dirtyFieldsSinceLastSubmit }) => (
                <Form onSubmit={handleSubmit} error>
                    <Header as='h2' content='Login to Reactivities' color='teal' textAlign='center' />
                    <Field name='email' component={TextInput} placeholder='Email' />
                    <Field name='password' component={TextInput} placeholder='Password' type='password' />
                    {submitError && (
                        <ErrorMessage error={submitError} text='Invalid usernmame or password' />)}
                    <Button disabled={(invalid && !dirtyFieldsSinceLastSubmit) || pristine} loading={submitting} color='teal' content='Login' fluid />
                </Form>
            )}
        />
    )
}
