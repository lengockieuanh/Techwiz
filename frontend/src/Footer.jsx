import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return ( 
        <div className='img-fluid' id="footer" style={{ backgroundImage: 'url("/footerbackground.jpg")', backgroundSize: 'cover'}}>
            <div className='container mt-1' >
                <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-4 gap-lg-5 px-2 px-sm-3 px-md-4 px-lg-120">
                    <div><a className='footerLine1' href="">ABOUT US</a></div>
                    <div><a className='footerLine1' href="">CONTACT US</a></div>
                    <div><a className='footerLine1' href="">POLICY</a></div> 
                    <div><a className='footerLine1' href="">ARTICLE</a></div>
                    <div><a className='footerLine1' href="">GALLERY</a></div>
                </div>
                
                <div className="footerLine2">
                    <a className="footerLine2Child" href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="footerLine2Child" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="footerLine2Child" href=""><FontAwesomeIcon icon={faTiktok} /></a>
                    <a className="footerLine2Child" href=""><FontAwesomeIcon icon={faYoutube} /></a>
                </div>

                <div className="row d-flex justify-content-between px-3 ">
                    <div className="footerLine3 col-12 col-md-4 col-xl-3"> 
                        <h7 className="footerLine3Child1 ">LOCATION</h7> 
                        <p className="footerLine3Child2">21bis Hau Giang, Tan Binh Ward</p>
                        <p className="footerLine3Child2">Ho Chi Minh City, Viet Nam</p>
                    </div>
                    <div className="footerLine3 col-12 col-md-4 col-xl-3">
                    <h7 className="footerLine3Child1">CONTACT US</h7>
                        <p className="footerLine3Child2">Phone: (84) 3842 981 574</p>
                        <p className="footerLine3Child2">Hotline: (84) 1800 5634 </p>
                    </div>
                    <div className="footerLine3 col-12 col-md-4 col-xl-3">
                    <h7 className="footerLine3Child1">MAILING ADDRESS</h7>
                        <p className="footerLine3Child2">info@helloworld.com</p>
                        <p className="footerLine3Child2">reservation@helloworld.com</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;