import React from 'react'
import { withRouter } from 'react-router'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const NavMenuItem = withRouter(({location, path, name}) =>
    <Link to={path}>
        <Menu.Item name='editorials'
                   position="right"
                   active={location.pathname.startsWith(path)}>
            {name}
        </Menu.Item>
    </Link>)

const SuiTopbarMenu = ({links = [], onLogout}) =>
    <Menu secondary pointing>
        {links.map(({path, name}) =>
            <NavMenuItem path={path}
                         key={path}
                         name={name}/>
        )}
        <Menu.Item name="blaba"
                   onClick={onLogout}
                   position="right"/>
    </Menu>

export default SuiTopbarMenu
