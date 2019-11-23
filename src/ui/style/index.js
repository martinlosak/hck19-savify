import injectJss, { JssProvider, ThemeProvider } from 'react-jss'
import React from 'react'
import { compose } from 'ramda'
import { withProps } from 'recompose'
import { createTheme } from 'src/ui/style/theme'

export const withCss = (...args) => compose(
    injectJss(...args),
    withProps(({classes}) => ({css: classes})))

export const withRootCss = (rootCss, inlineStyle) => {

    if (typeof rootCss !== 'function') {
        const tmp = rootCss
        rootCss = () => tmp
    }

    return compose(
        withCss(t => ({
            _root: props => rootCss(t, props),
        })),
        withProps(({classes, className}) => ({
            className: `${className} ${classes._root}`
        }))
    )
}

// jss.use(increaseSpecificity())

const theme = createTheme()
console.log('theme is', theme)
window.t = theme

export const StyleProvider = ({children}) =>
    <JssProvider>
        <ThemeProvider children={children}
                       theme={theme}/>
    </JssProvider>
