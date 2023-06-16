import './Footer.css'
import img_fb from '../../assets/img/rrss/FB_icon-icons.com_65484.png'
import img_tw from '../../assets/img/rrss/TWITTER_icon-icons.com_65486.png'
import img_pt from '../../assets/img/rrss/PINTEREST_icon-icons.com_65491.png'
import logo_ig from '../../assets/img/rrss/instagram_f_icon-icons.com_65485.png'

function Footer() {
    return (
            <div>
                <div className="footer-main">
                    <div className="footer-div">
                        <h4>Contact Info</h4>
                        <p>22 Innovation Street, CA, US</p>
                        <p>office@syncmobile.com</p>
                        <p>+44 376 945 23</p>
                    </div>
                    <div className="footer-div">
                        <h4>Value Links</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Article Details</p>
                    </div>
                    <div className="footer-div">
                        <h4>Others Apps</h4>
                        <p>Scientific Calculator</p>
                        <p>Advanced Timer</p>
                        <p>Music Store</p>
                    </div>
                    
                    <ul className="footer-div-rrss">
                        <li className="img-rrss-background">
                            <img className="img-rrss" src={img_fb}/>
                        </li>
                        <li className="img-rrss-background">
                            <img className="img-rrss" src={img_tw}/>
                        </li>
                        <li className="img-rrss-background">
                            <img className="img-rrss" src={img_pt}/>
                        </li>
                        <li className="img-rrss-background">
                            <img className="img-rrss" src={logo_ig}/>
                        </li>

                    </ul>
                    
                </div>
                <div className="footer-main">
                    <p>Copyright &copy 2020 Inovatik - All rights reserved</p>
                </div>
            </div>
    )
}
export default Footer