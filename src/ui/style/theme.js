import { imp } from 'src/ui/style/mixins'
import colors from './colors.scss'

const getCssVar = name =>
    getComputedStyle(document.body).getPropertyValue(name)

export const createTheme = () => {
    const theme = {
        spacing: 10,
        imp,
        color: {
            primary: colors.primary,
            dark: '#3c3b3b'
        },
        font: {
            size: {
                lg: 20
            }
        }

    }

    theme.spacingLg = theme.spacing * 1.5
    return theme
}
