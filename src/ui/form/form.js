import React from 'react'
import { Form as FinalForm } from 'react-final-form'

export const Form = ({ onSubmit, children, validate, initialValues, ...props }) =>
  <FinalForm
    onSubmit={
      data => onSubmit(data).then(() => undefined).catch(err => {
        // We need to resolve with no value otherwise it si considered error
        console.error(err) // Errors are not logged
        throw err
      })}
    initialValues={initialValues}
    validate={validate && (data => validate(data, props))}>
    {formProps =>
      children({ ...props, ...formProps })
    }
  </FinalForm>

export const form = ({ initialValues, validate } = {}) =>
  Comp => ({ onSubmit, ...props }) =>
    <Form onSubmit={onSubmit}
          initialValues={initialValues && initialValues(props)}
          validate={validate}
          {...props} >
      {props => <Comp {...props}/>}
    </Form>

export const inForm = form
