import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { withCss } from 'src/ui/style/index'
import { compose } from 'ramda'
import { boxShadow } from 'src/ui/style/mixins'

export const NavMenuItem = ({path, name}) =>
    <Nav.Item>
        <Nav.Link href={path}>{name}</Nav.Link>
    </Nav.Item>

const BsTopbarMenu = ({links, history, css, onLogout, location}) =>
    <Navbar bg="white"
            collapseOnSelect
            className={css.root}
            expand="sm">
        <Navbar.Brand href="#home">
            MS
        </Navbar.Brand>
        <Button variant="link">
            <Navbar.Text onClick={onLogout}>
                Logout
            </Navbar.Text>
        </Button>
    </Navbar>

export default compose(
    withRouter,
    withCss({
        root: {
            justifyContent: 'space-between',
            height: '2.5em',
            ...boxShadow()
        }
    })
)(BsTopbarMenu)
