import React from 'react'
import View from 'src/ui/components/View'
import { Page } from 'react-onsenui'
import { withCss } from 'src/ui/style'
import Button from 'src/ui/components/Button'
import { compose } from 'ramda'
import { inForm } from 'src/ui/form/form'
import { FormInput } from 'src/ui/form/inputs'
import { withAppContext } from 'src/app-context/AppContext'

const Login = ({css, handleSubmit}) =>
    <Page className={css.root}>
        <View className={css.cont}>
            <h1> Login</h1>
            <View className={css.form}>
                <FormInput
                    name="username"
                    placeholder={'Username'}/>
                <FormInput placeholder={'Password'}
                           name="password"
                           type="password"/>
                <Button modifier={'large'}
                        onClick={handleSubmit}>Submit</Button>
            </View>
        </View>
    </Page>

export default compose(
    withCss({
        root: {
            '& .page__content': {
                paddingTop: 100,
                background: 'white !important'
            }
        },
        cont: {
            alignItems: 'center'
        },
        form: {
            width: 240,
            '& input, span': {
                fontSize: 18
            },
            '& > *': {
                marginBottom: 8
            }
        }
    }),
    withAppContext(({auth}) => ({
        onSubmit: ({username, password}) =>
            auth.logIn({username, password})

    })),
    inForm({
        initialValues: () => ({
            username: 'jane-doe123',
            password: 'password'
        }),
        validate: data => {
            return {
                username: !data.username ? ' Cannot be empty' : undefined,
                password: !data.password ? ' Cannot be empty' : undefined
            }
        }
    })
)(Login)
