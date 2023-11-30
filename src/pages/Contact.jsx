import React, {useState, useEffect} from 'react';
import axios from 'axios';
import heroImage from '../assets/images/heroImage.jpg';
import Loading from '../components/Loading';
import useCustomizer from '../hooks/useCustomizer';
import { Helmet } from 'react-helmet';
const formEndpoint = import.meta.env.VITE_WP_API_FORM_ENDPOINT;
const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const ContactForm = () => {
    const {secondaryColor, bodyFont, headingFont} = useCustomizer();
    useEffect(() => {
        document.getElementById('contact').style.backgroundColor = `${secondaryColor}`;
        document.getElementById('heading').style.fontFamily = `${headingFont}`;
        document.body.style.fontFamily = `${bodyFont}`;
    
    })

    const [submmited, setSubmmited] = useState(false);
    const [error, setError] = useState(false);

    const [name, setNmae] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [method, setMethod] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('your-name', name);
        formData.append('your-email', email);
        formData.append('your-tel', phone);
        formData.append('your-subject', subject);
        formData.append('your-contact-method', method);
        formData.append('your-message', message);

        axios.post(formEndpoint, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then(function (response){
                console.log(response);
                setSubmmited(true);
                setNmae('');
                setEmail('');
                setPhone('');
                setSubject('');
                setMethod('');
                setMessage('');
            })
            .catch(function (error){
                console.log(error);
                setError(true);
            });
    };

return (
    <form className="contact-form" onSubmit={handleSubmit} method='POST'>
        <h3 className='form-heading'>Send us a message</h3>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setNmae(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
            <label htmlFor='method'>Contact Method</label>
            <select name='method' id='method' value={method} onChange={(e) => setMethod(e.target.value)} required>
                <option hidden={true}>Select an option</option>
                <option value='Phone'>Phone</option>
                <option value='Email'>Email</option>
            </select>
        </div>
        <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
        <div className="form-message">
            {submmited && <span>Thank you for your message.</span>}
            {error && <span>There was an error sending your message.</span>}
        </div>
    </form>
);
}

const Contact = () => {

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
            Need to get in touch?
            <br></br>
            Send us a message or give us a call.
        </h1>
        <p>
            Where East Meets West, 
            we offer ancient Ayurveda therapies to state of the art skin 
            care and laser hair removal treatments.
        </p>
    </div>       
    </div>
    <div id='contact'>
        <div id='heading' className='heading lighter'>
            <h2><span>Contact Us</span></h2>
            <div className='underline'></div>
        </div>
        <div className='contact-content'>
            <div className='contact-info'>
                <div className='contact-text'>
                    <div className='contact-item'>
                        <h3>Phone</h3>
                        <p>04 894 3880</p>
                    </div>
                    <div className='contact-item'>
                        <h3>Email</h3>
                        <p>
                            <a href="mailto:bookings@beyondskin.care">Bookings@beyondskin.care</a>
                        </p>
                    </div>
                    <div className='contact-item'>
                        <h3>Address</h3>
                        <p>Asteron Centre, <br></br> 61a Featherston Street,<br></br> Wellington, 6011</p>
                    </div>
                </div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.316361908046!2d174.77644301315976!3d-41.280218739874414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38ae2c6442c9f1%3A0x83fdc2c9ff536741!2s61a%20Featherston%20Street%2C%20Pipitea%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1700920321196!5m2!1sen!2snz" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">    
                </iframe>
            </div>
            <div className='form-container'>

                <ContactForm /> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact