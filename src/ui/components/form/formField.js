import { Form } from 'react-bootstrap'
import React from 'react'
import Text from 'src/ui/components/Text'

export const formField = () => InputComp => {
    return ({id, label, error, ...props}) =>
        <Form.Group controlId={id}>
            <Form.Label>
                <Text>{label}</Text>
            </Form.Label>
            <InputComp {...props}
                       isInvalid={error}/>
            <Form.Control.Feedback type="invalid">
                <Text>{error}</Text>
            </Form.Control.Feedback>
        </Form.Group>
}
