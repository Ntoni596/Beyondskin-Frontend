import React, {useState, useEffect} from 'react'
import axios from 'axios'
import heroImage from '../assets/images/heroImageAbout.jpg'
import Loading from '../components/Loading';
import useCustomizer from '../hooks/useCustomizer';
import { Helmet } from 'react-helmet';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const About = () => {
    const { secondaryColor, headingFont, bodyFont } = useCustomizer();

    useEffect(() => {  
        document.getElementById('about').style.backgroundColor = `${secondaryColor}`;
        document.getElementById('heading').style.fontFamily = `${headingFont}`;
        document.body.style.fontFamily = `${bodyFont}`;
    });

    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);

    const endpoint = `${baseUrl}/posts/22?_embed`;

    useEffect(() => {
        axios.get(endpoint)
        .then((response) => {
            setAbout(response.data);
            setLoading(false);
            console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, []);

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
    <div id='about'>
        <div id="heading" className='heading lighter'>
            <h2><span>About Us</span></h2>
            <div className='underline'></div>
        </div>
        <div className="about-content">
                {loading ? (
                    <Loading />
                ) : (
                        <div className='abt-content' dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
                )}
        </div>
    </div>
    </>
  )
}

export default About