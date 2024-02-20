import React from "react";
import './footer.css';

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Planr</p>
                        </a>
                        <a href="/indivisual">
                            <p>Indivisual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src="{fb}" alt="fb" /></p>
                            <p><img src="{twiter}" alt="twiter" /></p>
                            <p><img src="{linkedin}" alt="linkedin" /></p>
                            <p><img src="{insta}" alt="insta" /></p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} company. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/terms"><div><p>Privacy</p></div></a>
                        <a href="/terms"><div><p>Cookies</p></div></a>
                        <a href="/terms"><div><p>Corporate</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;