import React, { useEffect, useState } from 'react';
import heroImage from '../assets/images/heroImageTreatments.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import useCustomizer from '../hooks/useCustomizer';
import { Helmet } from 'react-helmet';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Treatments = () => {
  const [treatments, setTreatments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { primaryColor, secondaryColor, bodyFont, headingFont, tertiaryColor } = useCustomizer();

  useEffect(() => {
    document.getElementById('treatments-page').style.backgroundColor = `${secondaryColor}`;
    document.getElementById('heading').style.fontFamily = `${headingFont}`;
    document.getElementById('tertiary').style.backgroundColor = `${tertiaryColor}`;
    document.body.style.fontFamily = `${bodyFont}`;
  })



  const endpoint = `${baseUrl}/treatments?_embed&per_page=100`;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setTreatments(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [endpoint]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryIdMapping = {
    massages: 4,
    facials: 5,
    laserwaxing: 6,
    browslashes: 8,
    manipedi: 7,
  };

  const filteredTreatments =
    selectedCategory !== null
      ? treatments.filter((treatment) =>
          treatment['treatment-type'].includes(categoryIdMapping[selectedCategory])
        )
      : treatments;

  const TreatmentList = ({ treatments }) => {
    const mappedTreatments = treatments.map((treatment, index) => {
      return (
        <div key={treatment.slug + '-' + index} id="primary" className='post-container'>
          <h4 className='title'>
            {treatment.title.rendered}
          </h4>
          <div className='content' dangerouslySetInnerHTML={{ __html: treatment.content.rendered }} />
          <Link to="/book" className='book-btn'>
            Book Now
          </Link>
        </div>
      );
    });

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
        <div id='treatments-page'>
            <div className='treatments-categories'>
                <button id="tertiary" onClick={() => handleCategoryClick('massages')}>Massages</button>
                <button id="tertiary" onClick={() => handleCategoryClick('facials')}>Facials</button>
                <button id="tertiary" onClick={() => handleCategoryClick('laserwaxing')}>Waxing and Laser</button>
                <button id="tertiary" onClick={() => handleCategoryClick('browslashes')}>Brows and Lashes</button>
                <button id="tertiary" onClick={() => handleCategoryClick('manipedi')}>Manicures and Pedicures</button>
            </div>
            
            {mappedTreatments.length === 0 ? (
            <p>No treatments found for the selected category.</p>
            ) : (
            mappedTreatments
            )}
        </div>
    </>
    );
  };

  return (
    <>
      <div id='heroImage'>
        <div className='overlay1'></div>
        <div className='overlay2'></div>
        <img src={heroImage} alt='Hero' />
        <div className='hero-text'>
          <h1>
            View Our Treatments
            <br />
            Find the perfect treatment for you.
          </h1>
          <p>
            Where East Meets West, we offer ancient Ayurveda therapies to state of the art skin care and laser hair
            removal treatments.
          </p>
        </div>
      </div>

      <div id='treatments-page'>
        <div id="heading" className='heading lighter'>
                <h2>
                    <span>Treatments</span>
                </h2>
                <div className='underline'></div>
        </div>
        <div className='treatments-content'>
                {loading ? (
                    <Loading />
                ) : (
                    <TreatmentList treatments={filteredTreatments} />
                )}
        </div>
      </div>
    </>
  );
};

export default Treatments;
