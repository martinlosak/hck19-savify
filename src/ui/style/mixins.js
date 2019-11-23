export const exceptLast = style => ({
    '& >*:not(:last-child)': style
})

export const centerContent = () => ({
    alignItems: 'center',
    justifyContent: 'center'

})

export const spaceIt = size => ({
    padding: size,
    ...exceptLast({
        marginBottom: size
    })
})

const unit = 'px'

export const boxShadow = () => ({
    boxShadow: '0 1px 1px rgba(0,0,0,0.01), 0 1px 1px rgba(0,0,0,0.01)'
})

export const imp = {
    unit: val => `${val}px !important`
}
