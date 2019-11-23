import { Field } from 'react-final-form'
import React, { Fragment } from 'react'
import Error from 'src/error/Error'

export const formalize = () => Comp => ({
                                          name, label = name,
                                          ...props
                                        }) =>
  <Field name={name}>
    {({ input, meta }) => {
      const error = meta.touched && meta.error
      return <Fragment>
        <Comp {...input} {...props}/>
        <Error value={error}/>
      </Fragment>
    }}
  </Field>
