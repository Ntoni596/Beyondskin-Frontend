import React, {useEffect, useState} from "react";
import axios from 'axios'
import heroImage from "../assets/images/heroImageTreatments.jpg";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import useCustomizer from "../hooks/useCustomizer";
import {Helmet} from "react-helmet";

const baseUrl = import.meta.env.VITE_WC_API_BASEURL;

const Vouchers = () => {
    const [vouchers, setVouchers] = useState(null);
    const [loading, setLoading] = useState(true);
    const {secondaryColor, bodyFont, headingFont, tertiaryColor} = useCustomizer();

    useEffect(() => {
        document.getElementById('shop-page').style.backgroundColor = `${secondaryColor}`;
        document.getElementById('heading').style.fontFamily = `${headingFont}`;
        document.getElementById('secondary').style.backgroundColor = `${secondaryColor}`;
        document.body.style.fontFamily = `${bodyFont}`;
    })

    useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => {
                setVouchers(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }
    , []);

    const VoucherList = ({vouchers}) => {
        const mappedVouchers = vouchers.map((voucher, index) => {
          function getFeaturedImage(voucher) {
            if (voucher && voucher.images && voucher.images[0]) {
              return voucher.images[0].src;
            } else {
              return 'https://via.placeholder.com/150';
            }
        }
        return (
          <div className="product-container item-container" key={index}>
              <img className="product-image" src={getFeaturedImage(voucher)} alt="Product Image" />
              <h3 className="product-name">{voucher.name}</h3>
              <div className="product-description" dangerouslySetInnerHTML={{__html:voucher.description}}></div>
              <div className="price-container">
                <Link className="product-link" to="https://bookings.gettimely.com/beyondskin1/purchase?uri=https%3A%2F%2Fbook.gettimely.com%2FGiftVoucher%2FDetails%2F89647%3FisMobile%3DTrue%26params%3D%25253fclient-login%25253dtrue" >
                    <h4 className="name">Buy Now</h4>
                </Link>
                <div className="price" dangerouslySetInnerHTML={{__html:voucher.price_html}}></div>
              </div>
          </div>
        )
      })
      
      console.log({ mappedVouchers });

        return (
            <div className='posts-container'>
                {mappedVouchers}
            </div>
        );
    };
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
          <div id='heroImage'>
            <div className='overlay1'></div>
            <div className='overlay2'></div>
            <img src={heroImage} alt='Hero' />
            <div className='hero-text'>
              <h1>
                Need a gift for someone special? 
                <br />
                Give them the gift of relaxation.
              </h1>
              <p>
                Where East Meets West, we offer ancient Ayurveda therapies to state of the art skin care and laser hair
                removal treatments.
              </p>
            </div>
          </div>
    
        <div id="shop-page">
          <div id="heading" className="heading lighter">
            <h2><span id="secondary">Vouchers</span></h2>
          </div>
        <div id="product-grid" className="grid-container">
        {loading ? <Loading /> : <VoucherList vouchers={vouchers} />}
        </div>
    </div>
        </>
      );
    };

export default Vouchers