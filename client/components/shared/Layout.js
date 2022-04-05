import Nav from '.Nav'
import Footer from './Footer'

const Layout = (props) => {
    // return is not needed because it a shared component in Home
    return (
    <div>
        <h1>Items</h1>

        {props.children}
        <Nav />
    </div>
    )

}

export default Layout;