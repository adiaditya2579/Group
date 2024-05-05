import React from 'react'
import './Shop.css'
import Button from '../Buttons/Button'

function Shop() {

    const data = [
        {
            "title": "Tygot Mobile Stand",
            "link": "https://amzn.to/3FLSD9D",
            "desc": "7 Feet (84 Inch) Long Tripod Stand with Adjustable Mobile Clip Holder",
            "img": "https://m.media-amazon.com/images/I/31yLwzxjv7S._SX300_SY300_QL70_FMwebp_.jpg",
            "price": "₹300-400"
        },
        {
            "title": "ASUS Vivobook 14",
            "link": "https://amzn.to/3soyzXR",
            "desc": "i3 12th gen, 8GB RAM, 512GB SSD, Fingerprint reader",
            "img": "https://m.media-amazon.com/images/I/71hu2MKb3xL._SL1500_.jpg",
            "price": "₹37,000"
        },
        {
            "title": "Acer Aspire 3",
            "link": "https://amzn.to/3QxhrqS",
            "desc": "i5 12th Gen, 16GB RAM, 512GB SSD",
            "img": "https://m.media-amazon.com/images/I/71fgHQy31ZL._SL1500_.jpg",
            "price": "₹44,000"
        },
        {
            "title": "Acer Aspire 5",
            "link": "https://amzn.to/47iU2QI",
            "desc": "i5 12th Gen, 16GB RAM, 512GB SSD, 4GB RTX 2050",
            "img": "https://m.media-amazon.com/images/I/61xzutxSl8L._SL1200_.jpg",
            "price": "₹52,000"
        },
        {
            "title": "ASUS Vivobook 15",
            "link": "https://amzn.to/3Qr7V8V",
            "desc": "i7 12th Gen, 16GB RAM, 512GB SSD, Backlit Keypad",
            "img": "https://m.media-amazon.com/images/I/813-FmU7N1L._SL1500_.jpg",
            "price": "₹61,000"
        },
        {
            "title": "ASUS TUF Gaming F15",
            "link": "https://amzn.to/49p2Er1",
            "desc": "i7 11th Gen,16 GB RAM, 512GB SSD, 4GB RTX 3050 Ti",
            "img": "https://m.media-amazon.com/images/I/81UWgnVKDBL._SL1500_.jpg",
            "price": "₹69,000"
        },
        {
            "title": "Apple MacBook Air Laptop M1 13''",
            "link": "https://amzn.to/40s7Bva",
            "desc": "M1 Chip, 8GB RAM, 256 GB SSD, Backlit keypad, Fingerprint reader",
            "img": "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg",
            "price": "₹71,000"
        },
        {
            "title": "Acer Nitro V",
            "link": "https://amzn.to/3ufuzta",
            "desc": "i5 13th Gen,16GB DDR5 RAM, 512GB SSD, 6GB RTX 4050",
            "img": "https://m.media-amazon.com/images/I/516qCPpFXkL._SL1280_.jpg",
            "price": "₹73,000"
        },
        {
            "title": "ASUS ROG Strix G17 (2022)",
            "link": "https://amzn.to/40r36RD",
            "desc": "RYZEN 7-6800HS,16GB RAM,512GB SSD,4GB RTX 3050",
            "img": "https://m.media-amazon.com/images/I/61GkvvDNnCL._SL1500_.jpg",
            "price": "₹86,000"
        },
        {
            "title": "ASUS ROG Strix G15",
            "link": "https://amzn.to/3Qp25EW",
            "desc": "RYZEN 7-6800H,16GB RAM,1TB SSD,4GB RTX 3050",
            "img": "https://m.media-amazon.com/images/I/51wQ18eozvL.jpg",
            "price": "₹93,000"
        },
        {
            "title": "ASUS Vivobook S 15 OLED (2023)",
            "link": "https://amzn.to/40r3b7T",
            "desc": "i9 13th Gen, 16GB RAM, 1TB SSD,OLED display, Fingerprint",
            "img": "https://m.media-amazon.com/images/I/71eQy-sS8GL._SL1500_.jpg",
            "price": "₹1,05,000"
        },
        {
            "title": "ASUS Vivobook 14X OLED",
            "link": "https://amzn.to/3u5RZRX",
            "desc": "Intel Core i9-13900H, 14'' OLED, 16 GB RAM, 1TB SSD, 4GB RTX 3050, Fingerprint",
            "img": "https://m.media-amazon.com/images/I/71VxVpzY9YL._SL1500_.jpg",
            "price": "₹1,10,000"
        },
        {
            "title": "Acer Predator Helios Neo 16",
            "link": "https://amzn.to/40rwYx7",
            "desc": "13th Gen Intel Core i7 Processor, 16 GB RAM, 1TB SSD, RTX 4050",
            "img": "https://m.media-amazon.com/images/I/81E2srXhKVL._SL1500_.jpg",
            "price": "₹1,10,000"
        },
        {
            "title": "SPYKART Tabletop Stand",
            "link": "https://amzn.to/3Sp0VMn",
            "desc": "Tabletop stand if you will be sitting on the floor",
            "img": "https://m.media-amazon.com/images/I/31l0prWnXTS.jpg",
            "price": "₹250"
        },
        {
            "title": "Zebronics Zeb-Crisp Pro",
            "link": "https://amzn.to/3FNGZLA",
            "desc": "[Preferred] 720p webcam",
            "img": "https://m.media-amazon.com/images/I/71rVBjz8xkL._SL1500_.jpg",
            "price": "₹1000"
        },
        {
            "title": "ZEBRONICS Zeb-Crystal Clear",
            "link": "https://amzn.to/4661Swe",
            "desc": "Basic 480p web-cam if you're on a tight budget",
            "img": "https://m.media-amazon.com/images/I/71fKEMwMWYL._SL1500_.jpg",
            "price": "₹500"
        },
        {
            "title": "Lenovo 300 FHD",
            "link": "https://amzn.to/3Mtciik",
            "desc": "BUY ONLY IF YOU CAN AFFORD!!!",
            "img": "https://m.media-amazon.com/images/I/51IpsJmhInL._SL1500_.jpg",
            "price": "₹2500"
        },
    ]

    return (
        <div className='shop-outer-container'>

            <div className="shop-header-container">
                <h1>our recommended products</h1>
            </div>

            <div className="cards-container">


                {
                    data && data.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="img-container">
                                    <img src={item.img} alt="" />
                                </div>

                                <div className="card-content-container">

                                    <div className="header">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="desc-container">
                                        <p>{item.desc}</p>
                                    </div>

                                    <div className="buy-btn-container">
                                        <h2>{item.price}</h2>
                                        <a href={item.link} target='_blank'>
                                            <Button text={"Buy"} btnClass={"primary-outline"} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }



            </div>
        </div>
    )
}

export default Shop