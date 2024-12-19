import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ElfsightWidget } from 'react-elfsight-widget';
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay';
import { Helmet } from 'react-helmet';
import  useCustomizer  from '../hooks/useCustomizer'
import facialIcon from '../assets/icons/icons8-facemask.png'
import massageIcon from '../assets/icons/icons8-massage.png'
import eyelashIcon from '../assets/icons/icons8-eyelashes.png'
import waxingIcon from '../assets/icons/icons8-waxing.png'
import laserIcon from '../assets/icons/icons8-laser.png'
import nailIcon from '../assets/icons/icons8-nail.png'
import heroImage from '../assets/images/heroImage.jpg'
import shankara from '../assets/images/shankara.png'
import beautymed from '../assets/images/beautymed.png'
import skincarerx from '../assets/images/skincarerx.png'
import honneycollection from "../assets/images/honneycollection.avif"
import greenpeel from "../assets/images/greenpeel.png"
SwiperCore.use([Autoplay])


const Home = () => {
    const {
        primaryColor, secondaryColor,
        bodyFont, headingFont} = useCustomizer();
    
    useEffect(() => {
        document.getElementById('treatments').style.backgroundColor = `${primaryColor}`;
        document.getElementById('primary').style.backgroundColor = `${primaryColor}`;
        document.getElementById('reviews').style.backgroundColor = `${secondaryColor}`;
        document.body.style.fontFamily = `${bodyFont}`;
        document.getElementById('heading').style.fontFamily = `${headingFont}`;
    })
    return (
    <>
        <Helmet>
            <title>Beyond Skin - Wellington&#39;s Massage &amp; Beauty Day Spa </title>
            <link rel="canonical" href="https://www.beyondskin.co"/>
            <meta property="og:site_name" content="Beyond Skin"/>
            <meta property="og:title" content="Beyond Skin - Wellington&#39;s Massage &amp; Beauty Day Spa "/>
            <meta property="og:url" content="https://www.beyondskin.co"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Treat your skin with Beyond Skin. Located in the heart of Wellington, Beyond Skin therapists are highly trained eye treatments, electrolysis, waxing, massage, spray tanning and manicure and pedicures."/>
            <meta property="og:image:width" content="1433"/>
            <meta property="og:image:height" content="559"/>
            <meta itemprop="name" content="Beyond Skin - Wellington's Massage &amp; Beauty Day Spa "/>
            <meta itemprop="url" content="https://www.beyondskin.co"/>
            <meta itemprop="description" content="Treat your skin with Beyond Skin. Located in the heart of Wellington, Beyond Skin therapists are highly trained eye treatments, electrolysis, waxing, massage, spray tanning and manicure and pedicures."/>
            <meta name="twitter:title" content="Beyond Skin - Wellington's Massage &amp; Beauty Day Spa "/>
            <meta name="twitter:url" content="https://www.beyondskin.co"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:description" content="Treat your skin with Beyond Skin. Located in the heart of Wellington, Beyond Skin therapists are highly trained eye treatments, electrolysis, waxing, massage, spray tanning and manicure and pedicures."/>
            <meta name="description" content="Treat your skin with Beyond Skin. Located in the heart of Wellington, 
            Beyond Skin therapists are highly trained eye treatments, electrolysis, 
            waxing, massage, spray tanning and manicure and pedicures." />
            <meta name="keywords" content="Beyond Skin, Beauty, Massage, Wellington, Day Spa, Skin, Facial, Ayurveda" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        <div id="heroImage">
            <div className='overlay1'></div>
                <div className='overlay2'></div>
                    <img src={heroImage}></img>
                        <div className='hero-text'>
                            <h1>
                                Escape the real world.
                                <br></br>
                                Make some time for yourself.
                            </h1>
                            <p>
                                Where East Meets West, 
                                we offer ancient Ayurveda therapies to state of the art skin 
                                care and laser hair removal treatments.
                            </p>
                        </div>       
        </div>
        <div id="treatments">
            <div className="heading heading-left">
                <h2 id="heading"><span id="primary">Treatments</span></h2>
            </div>
            <div className='treatments-container'>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={facialIcon}></img>
                    </div>
                    <div className='treatment-text'>
                        <h3>Facials</h3>
                        <p>
                        Rejuvenate and exfoliate back to your natural glow 
                        </p>
                    </div>
                </div>
                </Link>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={massageIcon}></img>
                    </div>
                    <div className='treatment-text'>
                        <h3>Ayurvedic Massages</h3>
                        <p>
                        Relax and let go with our specialty Ayurvedic Massages
                        </p>
                    </div>
                </div>
                </Link>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={eyelashIcon}></img>
                    </div>
                    <div className='treatment-text'>
                        <h3>Brows and Lashes</h3>
                        <p>
                        Tidy up your eyebrows and lashes to look the part
                        </p>
                    </div>
                </div>
                </Link>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={waxingIcon}></img>
                    </div>
                    <div className='treatment-text'>
                        <h3>Waxing Treatments</h3>
                        <p>
                        Remove unwanted hair leaving you with silky smooth skin
                        </p>
                    </div>
                </div>
                </Link>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={laserIcon}></img>
                    </div>
                    <div className='treatment-text '>
                        <h3>Laser Hair Removal</h3>
                        <p>
                        Remove unwanted hair leaving you with silky smooth skin for longer
                        </p>
                    </div>
                </div>
                </Link>
                <Link to="/treatments">
                <div className='treatment border'>
                    <div className='treatment-icon'>
                        <img src={nailIcon}></img>
                    </div>
                    <div className='treatment-text'>
                        <h3>Manicures and Pedicures</h3>
                        <p>
                        Our hands and feet need love too, treat yourself to our Manicures and Pedicures
                        </p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        <div id='brands'>
            <Swiper 
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            >
                <SwiperSlide><img src={shankara}></img> </SwiperSlide>
                <SwiperSlide><img src={beautymed}></img> </SwiperSlide>
                <SwiperSlide><img src={greenpeel}></img> </SwiperSlide>
            </Swiper>
        </div>
        <div id='reviews'>
            <div id="secondary" className="heading-right">
                <h2><span>Happy Customers</span></h2>
            </div>
            <div className='reviews-container'>
                <ElfsightWidget widgetId='56daecac-61d5-40cc-a96f-76625ef54dc4'/>
            </div>
        </div>
    </>
)
}

export default Home