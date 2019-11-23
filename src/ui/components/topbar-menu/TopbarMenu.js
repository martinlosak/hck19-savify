import { compKit } from 'src/ui/components/compKit'
import SuiTopbarMenu from 'src/ui/components/topbar-menu/SuiTopbarMenu'
import View from 'src/ui/components/View'
import BsTopbarMenu from 'src/ui/components/topbar-menu/BsTopbarMenu'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { signedOut } from 'src/auth/state/actions'
import { withRouter } from 'react-router'

export default compose(
    withRouter,
    connect(null, {onLogout: signedOut})
)(compKit(
    {
        'sui': SuiTopbarMenu,
        'bs': BsTopbarMenu,
        'my': View
    }))
