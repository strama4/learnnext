import Header from './Header';

const layoutAttributes = {
    margin: 10,
    border: 'solid 1px black',
}
const Layout = (props) => (
    <div style={layoutAttributes}>
        <Header/>
        {props.children}
    </div>
)

export default Layout;