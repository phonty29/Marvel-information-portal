import './comicsList';
import uw from '../../assets/img/UW.png';
import xmen from '../../assets/img/x-men.png';

const ComicsList = () => {
    return (
        <div className='comics__list'>
            <ul className="comics__grid">
                <li className="comics__item">
                    <img src={uw} alt="ultimate war" className='comics__item-img'/>
                    <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__item-price">9.99$</div>
                </li>
                <li className="comics__item">
                    <img src={xmen} alt="x-men" className='comics__item-img'/>
                    <div className="comics__item-name">X-Men: Days of Future Past</div>
                    <div className="comics__item-price">NOT AVAILABLE</div>
                </li>
                <li className="comics__item">
                    <img src={uw} alt="ultimate war" className='comics__item-img'/>
                    <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__item-price">9.99$</div>
                </li>
                <li className="comics__item">
                    <img src={xmen} alt="x-men" className='comics__item-img'/>
                    <div className="comics__item-name">X-Men: Days of Future Past</div>
                    <div className="comics__item-price">NOT AVAILABLE</div>
                </li>
                <li className="comics__item">
                    <img src={uw} alt="ultimate war" className='comics__item-img'/>
                    <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__item-price">9.99$</div>
                </li>
                <li className="comics__item">
                    <img src={xmen} alt="x-men" className='comics__item-img'/>
                    <div className="comics__item-name">X-Men: Days of Future Past</div>
                    <div className="comics__item-price">NOT AVAILABLE</div>
                </li>
                <li className="comics__item">
                    <img src={uw} alt="ultimate war" className='comics__item-img'/>
                    <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comics__item-price">9.99$</div>
                </li>
                <li className="comics__item">
                    <img src={xmen} alt="x-men" className='comics__item-img'/>
                    <div className="comics__item-name">X-Men: Days of Future Past</div>
                    <div className="comics__item-price">NOT AVAILABLE</div>
                </li>
            </ul>
        </div>
    )
}

export default ComicsList;