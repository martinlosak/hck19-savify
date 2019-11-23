import React from 'react'

const Error = ({ value }) =>
  value ? <div>
    {value}
  </div> : null

export default Error
