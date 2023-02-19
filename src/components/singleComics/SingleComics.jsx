import './singleComics';
import xmen from '../../assets/img/x-men.png';

const SingleComics = () => {
    return (
        <div className="single-comics">
                <img src={xmen} alt="x-men" className="single-comics__img" />
                <div className="single-comics__info">
                <h2 className="single-comics__name">X-Men: Days of Future Past</h2>
                <p className="single-comics__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="single-comics__descr">144 pages</p>
                <p className="single-comics__descr">Language: en-us</p>
                <div className="single-comics__price">9.99$</div>
            </div>
            <a href="#" className="single-comics__back">Back to all</a>
        </div>
    )
}

export default SingleComics;