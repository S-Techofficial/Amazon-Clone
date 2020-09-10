import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {

    return (
        <div className="home">
            <div className="home_container">
            <div className="carousel" data-flickity='{"autoPlay":true}'>
                <div className="carousel-cell">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/ApparelP0/BOTM/SEP/PC/PC-BUNK_Frontline-Couple-1500x600-01._CB405229653_.jpg" alt="" />
                </div>
                <div className="carousel-cell">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt="" />
                </div>
                <div className="carousel-cell">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg" alt="" />
                </div>
                <div className="carousel-cell">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/ATF/U599/Sep/New/2._CB406825212_.jpg" alt="" />
                </div>
            </div>
                
            <div className="home_row">
                <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3} />
                <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen mixer with K-beater, Dough hook and Whisk, 5 Liter Glass Bowl" price={239.0} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/51ae8jtSakL._AC_UL160_.jpg"/>
                <Product id="12510554" title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set Paperback – 1 August 2019" price={50.5} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/81GM4Ang38L._AC_UL320_SR304,320_.jpg"/>
                <Product id="32456987" title="Boult Audio AirBass TrueBuds True Wireless Earbuds with Touch Controls, IPX7 Waterproof, Fast Charging with Type C Port & Playtime Upto 24 Hours with Case (Red)" price={168.35} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71UVBbKU%2BVL._SL1500_.jpg"/>
            </div>

            <div className="home_row">
                <Product id="4903850" title="Amazon Fitbit with Heart-rate monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Gneration)" price={598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
            </div>

            <div className="home_row">
            <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
            </div>
            
            </div>

        </div>
    )
}

export default Home
