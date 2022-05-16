import "../styles/navbar.css"

const Navbar = () => {
    return ( 
            <nav className="nav_container">
                <div className="nav_container-content">
                <div className="nav_logo">Instagram</div>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <ul className="nav_icons">
                    <li className="nav_icons-item">home</li>
                    <li className="nav_icons-item">DM</li>
                    <li className="nav_icons-item">create post</li>
                    <li className="nav_icons-item">explore</li>
                    <li className="nav_icons-item">activity</li>
                    <li className="nav_icons-item">my account</li>
                </ul>
                </div>
            </nav>
    )
}
 
export default Navbar;