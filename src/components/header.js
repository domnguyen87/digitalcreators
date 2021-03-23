import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (

  // <!-- header -->
  <header className="site-header">
     <nav className="navbar navbar-expand-lg center-brand static-nav">
        <div className="container">
           <a className="navbar-brand" href="index.html">
              <StaticImage
                 src="../images/logo.png" alt="logo" 
              />
           </a>
           <button className="navbar-toggler navbar-toggler-right collapsed d-none" type="button" data-toggle="collapse" data-target="#xenav">
              <span> </span>
              <span> </span>
              <span> </span>
           </button>
           <div className="collapse navbar-collapse" id="xenav">
              <ul className="navbar-nav" id="container">
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#ourhome">Home</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-process">Features</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-team">Team</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#portfolio_top">Portfolio</a>
                 </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-pricings">Packages</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-testimonial">Clients</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-blog">Blog</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#contactus">contact </a>
                 </li>
              </ul>
           </div>
        </div>
  
        {/* <!--side menu open button--> */}
        <a href="javascript:void(0)" className="d-lg-inline-block sidemenu_btn" id="sidemenu_toggle">
           <span></span> <span></span> <span></span>
        </a>
     </nav>
  
     {/* <!-- side menu --> */}
     <div className="side-menu">
        <div className="inner-wrapper">
           <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
           <nav className="side-nav w-100">
              <ul className="navbar-nav">
                 <li className="nav-item">
                    <a className="nav-link active" href="#ourhome">Home</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-process">Features</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-team">Team</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#portfolio_top">Portfolio</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-pricings">Packages</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-testimonial">Clients</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-blog">Blog</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link pagescroll" href="#contactus">contact</a>
                 </li>
              </ul>
           </nav>
  
           <div className="side-footer w-100">
              <ul className="social-icons simple white top40">
                 <li><a href="#."><i className="fab fa-facebook-f"></i> </a> </li>
                 <li><a href="#."><i className="fab fa-instagram"></i> </a> </li>
                 <li><a href="#."><i className="fab fa-twitter"></i> </a> </li>
              </ul>
              <p className="whitecolor">&copy; 2019 Novexl. Made With Love by themesindustry</p>
           </div>
        </div>
     </div>
     {/* <!-- End side menu --> */}
  </header>
  // {/* <!-- header --> */}
  
  //<header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
