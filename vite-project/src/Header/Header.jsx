import './Header.css'

import imgLogo from '../img/cat1.png';
import img1 from '../img/img-01.png';
import img2 from '../img/img-02.png';
import img3 from '../img/img-03.png';
import img4 from '../img/img-04.png';
import img5 from '../img/img-05.png';
import img6 from '../img/img-06.png';
import img7 from '../img/img-07.png';
import img8 from '../img/img-08.png';
import img9 from '../img/img-09.png';
import img10 from '../img/img-10.png';
import img11 from '../img/img-11.png';
import img12 from '../img/img-12.png';

const Header = () => {
    return (
        <><nav>
            <img className='imgLogo' src={imgLogo} alt="logo" />
            <div className='containerNav'>
                <h3>Login</h3>
                <h3>registrar</h3>
            </div>
        </nav>
            <div className='cat01'>
                <img className='img1' src={img1} alt="1" />
                <img className='img2' src={img2} alt="2" />
                <img className='img3' src={img3} alt="3" />
            </div>
            <div className='cat02'>
                <img className='img4' src={img4} alt="4" />
                <img className='img5' src={img5} alt="5" />
            </div>
            <div className='cat03'>
                <img className='img6' src={img6} alt="6" />
            </div>
            <div className='cat04'>
                <img className='img7' src={img7} alt="7" />
                <img className='img8' src={img8} alt="8" />
                <img className='img9' src={img9} alt="9" />
            </div>
            <div className='cat05'>
                <img className='img10' src={img10} alt="10" />
                <img className='img11' src={img11} alt="11" />
            </div>
            <div className='cat06'>
                <img className='img12' src={img12} alt="12" />
            </div>
        </>
    )



}
export default Header;