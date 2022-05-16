import "../styles/header.css"
import profilePic from "../assets/profilePic.png"

const Header = () => {
    return ( 
        <header>
            <section className="header_info-container">
                <div className="img-container">
                    <img className="profile_pic" src={profilePic} alt="profile pic" />
                </div>
                <div className="header_info-main-container">
                        <div className="header_info-main-container--title">
                            <p>m_bishop__</p>
                            <div className="header_info-main-container--title-button">Edit Profile</div>
                            <div>settings</div>
                        </div>
                        <div className="header_info-main-container--row">
                            <div className="header_info-main-container--info">
                                <p>108</p>
                                <p>posts</p>
                            </div>
                            <div className="header_info-main-container--info">
                                <p>286</p>
                                <p>followers</p>
                            </div>
                            <div className="header_info-main-container--info">
                                <p>302</p>
                                <p>following</p>
                            </div>
                        </div>
                    <div className="header_info-main-container--profile-info">
                        <p>michael bishop</p>
                        <p>@georginalilley</p>
                        <p>Rock Climbing</p>
                        <p>Coding</p>
                    </div>
                </div>
                <div className="header_spacer"></div>
            </section>
        </header>
     )
}
 
export default Header;