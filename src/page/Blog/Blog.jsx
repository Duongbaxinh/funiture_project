import React from "react";
import './styles.scss'
import Our_Blog from '../../assets/image/Our_Blog.png'
import product_thumbnail1 from '../../assets/image/novelties_item1.png'
import product_thumbnail2 from '../../assets/image/novelties_item2.png'
import product_thumbnail3 from '../../assets/image/novelties_item3.png'
import card_item1 from '../../assets/image/card_item1.png'
import card_item2 from '../../assets/image/card_item2.png'
import card_item3 from '../../assets/image/card_item3.png'
import card_item4 from '../../assets/image/card_item4.png'
import card_item5 from '../../assets/image/card_item5.png'
import imagePlaceholder from '../../assets/image/imagePlaceholder.png'
import { ReactComponent as IconMail } from '../../assets/svg/icon_mail.svg';

const ourBlog = {
    product_id: 1,
    product_name: 'Our Blog',
    product_des: [],
    product_thumbnail: Our_Blog,


}
const novelties = [
    {
        product_id: 1,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail1,
    },
    {
        product_id: 2,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail2,
    },
    {
        product_id: 3,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail1,
    },
    {
        product_id: 4,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail2,
    },
    {
        product_id: 5,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail3,
    },
    {
        product_id: 6,
        product_name: 'Headquarter in Hamburg',
        product_des: 'DE – Hamburg, 2022 | Office',
        product_thumbnail: product_thumbnail3,
    },
]
const cardBlog = [
    {
        product_id: 1,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item1,
    },
    {
        product_id: 2,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item2,
    },
    {
        product_id: 3,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item3,
    },
    {
        product_id: 4,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item4,
    },
    {
        product_id: 5,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item5,
    },
    {
        product_id: 1,
        product_name: 'BONDT - round',
        product_des: 'Design by Merit Frank, Nana Gröner, 2010',
        product_thumbnail: card_item1,
    },
]
const newslettter =
{
    id: 1,
    title: 'Join Our Newsletter',
    details: 'Sign up for deals, new products and promotions',
    background: imagePlaceholder
}


function Blog(porps) {
    return (
        <div className="Blog">
            <div className="Our_Blog">
                <img src={ourBlog.product_thumbnail} alt={ourBlog.product_thumbnail} />
                <h1>{ourBlog.product_name}</h1>

            </div>
            <div className="Novelties">
                {novelties.map((product, index) => (
                    <div className={`Novelties_item${index}`}>
                        <div className={`img${index}`}>
                            <img src={product.product_thumbnail} alt="" />
                        </div>
                        <h2>{product.product_name}</h2>
                        <p>{product.product_des}</p>
                    </div>
                ))}
            </div>
            <div className="CardBlog">
                <div className="CardBlog_content1">
                    <img src={cardBlog[0].product_thumbnail} alt={cardBlog[0].product_thumbnail} />
                    <h2>{cardBlog[0].product_name}</h2>
                    <p>{cardBlog[0].product_des}</p>
                </div>
                <div className="CardBlog_content2">
                {cardBlog.slice(1, 5).map((product, index) => (
                    <div className={`cardBlog_item${index}`}>
                        <div className={`Cimg${index}`}>
                            <img src={product.product_thumbnail} alt="" />
                        </div>
                        <h2>{product.product_name}</h2>
                        <p>{product.product_des}</p>
                    </div>
                ))}
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

    )
}
export default Blog;