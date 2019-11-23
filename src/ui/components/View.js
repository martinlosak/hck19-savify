import React from 'react'

const View = ({ children, horizontal, ...props }) =>
  <div {...props}
       style={{
         display: 'flex',
         flexDirection: horizontal ? 'row' : 'column',
         flexGrow: 1
       }}>
    {children}
  </div>

export default View
