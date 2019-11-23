import { Button } from 'react-onsenui'
import React from 'react'

const clientId = '829626060121-i5osf4eoqo0qb9vsnb0mvlvsjirs73gn.apps.googleusercontent.com'
const clientSecret = 'aNEzqM1-c5KFKjPeJAVtp3Kk'
const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://mail.google.com&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:8081&response_type=token&client_id=${clientId}`

const LoginButton = () => <Button
    onClick={() => window.location = url}>eeeww</Button>

export default LoginButton
