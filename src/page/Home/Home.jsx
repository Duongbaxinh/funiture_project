import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import imagebanner from '../../assets/image/Banner.jpg'
import cardsquare from '../../assets/image/cardsquare.jpg'
import cardSmall1 from '../../assets/image/cardSmall1.png'
import cardSmall2 from '../../assets/image/cardSmall2.png'
import cardSmall3 from '../../assets/image/cardSmall3.png'
import cardSmall4 from '../../assets/image/cardSmall4.png'
import cardBlock1 from '../../assets/image/cardBlock1.png'
import cardBlock2 from '../../assets/image/cardBlock2.png'
import cardBlock3 from '../../assets/image/cardBlock3.png'
import cardsThumbnail from '../../assets/image/cardsThumbnail.png'
import frameThumbnail from '../../assets/image/frameThumbnail.png'
import imagePlaceholder from '../../assets/image/imagePlaceholder.png'
import { ReactComponent as IconMail } from '../../assets/svg/icon_mail.svg';
const banner = {
    product_name: 'Masterpieces crafted from solid wood',
    product_des: 'Since 1990, Iconic has been producing ecological furniture. We stand for a modern, minimalist design vocabulary and a sustainable approach to design',
    product_thumbnail: imagebanner
}

const Novelties = [
    {
        product_id: 1,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: cardsquare,
    },
    {
        product_id: 2,
        product_name: '1.3 Chair',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: cardSmall1,
    },
    {
        product_id: 1,
        product_name: 'Kuyu Desk',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: cardSmall2,
    },
    {
        product_id: 1,
        product_name: 'Neat Noon',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: cardSmall3,
    },
    {
        product_id: 1,
        product_name: 'Denis Mahn',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: cardSmall4,
    },
]
const cardBlock = [
    {
        product_id: 1,
        product_name: 'CHAIR & BENCHES',
        product_des: 'The ensemble of the 1.3 Collection comprises chair, stool and bar stool. The most outstanding feature of this delicate.',
        product_thumbnail: cardBlock1,
    },
    {
        product_id: 2,
        product_name: 'AD MIRE',
        product_des: 'AD MIRE – the adjustable table mirror. This compact vanity mirror turns any table or console into a dressing table. The base is made from solid timber and holds the mirror in place.',
        product_thumbnail: cardBlock2,
    },
    {
        product_it: 3,
        product_name: [],
        product_des: [],
        product_thumbnail: cardBlock3,
    }

]
const cards = [
    {
        product_id: 1,
        product_name: [],
        product_des: [],
        product_thumbnail: cardsThumbnail,
    },
    {
        product_id: 2,
        product_name: 'TURNTABLE COUCH',
        product_des: 'The archaic form of this table speaks for itself. It owes its unique identity to the feeling that it turns around its own axis. It is present in the room as a feature and fixed on its slim-line middle foot in solid wood.',
        product_thumbnail: frameThumbnail,
    }
]
const newslettter =
{
    id: 1,
    title: 'Join Our Newsletter',
    details: 'Sign up for deals, new products and promotions',
    background: imagePlaceholder
}

function Home(props) {
    return (
        <div className="blocks">
            <div className="blocks_screens">
                <div className="blocks_screens--titles">
                    <h1>{banner.product_name}</h1>
                    <p>{banner.product_des}</p>
                    <Link to = {'/blog'}><button>Details</button></Link>
                </div>
                <div className="blocks_screens--images">
                    <img src={banner.product_thumbnail} alt={banner.product_thumbnail} />
                </div>
            </div>
            <h1 style={{ fontWeight: 'bold', margin: '10px 0px' }}>NOVELTIES</h1>
            <div className="novelties">

                {Novelties.map((product, index) => (
                    <div className={`novelties_item${index}`}>
                        <div className={`img${index}`}><img src={product.product_thumbnail} alt={product.product_thumbnail} /></div>
                        <h2>{product.product_name}</h2>
                        <p>{product.product_des}</p>
                    </div>
                ))}
            </div>
            <h1 style={{ fontWeight: 'bold', margin: '10px 0px' }}>Card Blocks</h1>
            <div className="cards_block">
                <div className="block_content1">
                    <div className="card1">
                        <div className="frame1"><h2>{cardBlock[0].product_name}</h2><p>{cardBlock[0].product_des}</p></div>
                        <div className="image1"><img src={cardBlock[0].product_thumbnail} alt={cardBlock[0].product_thumbnail} /></div>
                    </div>
                    <div className="card2">
                        <div className="image2"><img src={cardBlock[1].product_thumbnail} alt={cardBlock[1].product_thumbnail} /></div>

                        <div className="frame2"><h2>{cardBlock[1].product_name}</h2><p>{cardBlock[1].product_des}</p></div>
                    </div>
                </div>
                <div className="block_content2">
                    <img src={cardBlock[2].product_thumbnail} alt={cardBlock[2].product_thumbnail} />
                </div>
            </div>
            <div className="cards">
                <div className="cards_square">
                    <img src={cards[0].product_thumbnail} alt={cards[0].product_thumbnail} />
                </div>
                <div className="cards_frames">
                    <div className="cards_frames--content">
                        <h1>{cards[1].product_name}</h1>
                        <p>{cards[1].product_des}</p>
                    </div>
                    <div className="cards_frames--thumbnail">
                        <img src={cards[1].product_thumbnail} alt="" />
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <img src={newslettter.background} alt="" />
                <div className='newsleter_content'>
                    <h1>{newslettter.title}</h1>
                    <p>{newslettter.details}</p>
                    <div className="input_form">
                        <IconMail /><input type="text" placeholder='Email address' />
                        <button>Sign Up</button>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default Home;