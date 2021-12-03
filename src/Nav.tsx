import React from "react";
import blankImaage from "./static/images/blank-user.jpg";
import logo from "./static/images/logo.png";
import "./static/styles/mycss/navbar.css";
function Nav() {
  return (
    <>
      <nav className="">
        <div className="logo-nav">
          <img src={logo} alt="" />
        </div>
        <div className="nav-input">
          <input type="text" placeholder="Search" className="nav-input" />
        </div>
        <div className="nav-buttons">
          {/* <Link to="/galeria">NFT Gallery</Link> */}
          <div className="user-image-nav">
            {/* {imageAsUrl.imgUrl ? ( */}
            {/* <img */}
            {/* onClick={() => setProfileSubmenu(!profileSubmenu)} */}
            {/* src={imageAsUrl.imgUrl} */}
            {/* alt="" */}
            {/* /> */}
            {/* ) : ( */}
            <img
              // onClick={() => setProfileSubmenu(!profileSubmenu)}
              src={blankImaage}
              alt=""
            />
            {/* )} */}
            {/* {profileSubmenu && (
              <ul className="profile-submenu">
                <li>
                  <Link to={`/perfil/${nickname}`}>Profile</Link>
                </li>
                <li onClick={() => handleLogOut()}>Logout</li>
              </ul>
            )} */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
