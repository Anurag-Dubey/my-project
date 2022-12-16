import React from "react";
import "./style.css";
import Map from './map.js'
import{AiFillFacebook,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai"
import{BsPinterest} from "react-icons/bs"
import{TiSocialGooglePlus} from "react-icons/ti"
import { Link } from "react-router-dom";




function Footer() {

  
  return (
    <footer style={{paddingTop:50,color:"#A9A9A9",background:'#313438'}}>
    <div className="container-fluid">
      
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading">Our Contact</h5>
                <address>
                  <strong>SRI RAJARAJESHWARI BOREWELL &amp; PUMPS</strong>
                  <br />
                  # 516/1, 3rd Stage BEML Layout, <br />
                  Opp.Water Tank, Near Papaiah Kalyana Mantapa,
                  <br />
                  R. R.Nagar, Bangalore-560098
                </address>
                <p>
                  <i className="icon-phone"></i> 9845464653, 9538220508
                  <br />
                  <i className="icon-envelope-alt"></i> rrborewells@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading">Quick Links</h5>
                <ul className="link-list" style={{listStyle:"none" }}>
                  <li>
                    <Link to="/" style={{textDecoration:"none"}}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" style={{textDecoration:"none"}}>
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" style={{textDecoration:"none"}}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" style={{textDecoration:"none"}}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/form" style={{textDecoration:"none"}}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <Map/>
            </div>
          </div>
        </div>
        <div id="sub-footer" style={{background: '#282A2D'}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    <span style={{fontSize:15}}>
                      ©SRI RAJARAJESHWARI BOREWELL &amp; PUMPS All right
                      reserved. By{" "}
                    </span>
                    <Link to={{fontSize:15}}
                      href="/"
                      delight="_blank"
                    >
                      RCS Technology
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="social-network">
                  <li>
                    <Link style={{fontSize:15}}
                      to="www.facebook.com"
                      data-placement="top"
                      title=""
                      data-original-title="Facebook"
                    >
                      <AiFillFacebook/>
                    </Link>
                  </li>
                  <li>
                    <Link to={{fontSize:15}}
                      href="www.twitter.com"
                      data-placement="top"
                      title=""
                      data-original-title="Twitter"
                    >
                      <AiOutlineTwitter/>
                    </Link>
                  </li>
                  <li>
                    <Link to={{fontSize:15}}
                      href="www.linkidin.com"
                      data-placement="top"
                      title=""
                      data-original-title="Linkedin"
                    >
                      <AiFillLinkedin/>
                    </Link>
                  </li>
                  <li>
                    <Link to={{fontSize:15}}
                      href="www.pinerest.com"
                      data-placement="top"
                      title=""
                      data-original-title="Pinterest"
                    >
                      <BsPinterest/>
                    </Link>
                  </li>
                  <li>
                    <Link to={{fontSize:15}}
                      href="www.google.com"
                      data-placement="top"
                      title=""
                      data-original-title="Google plus"
                    >
                      < TiSocialGooglePlus/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
  );
}

export default Footer;
