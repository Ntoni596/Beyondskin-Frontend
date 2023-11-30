import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
    const [navTextColor, setNavTextColor] = useState("");
    const [mobileNavColor, setMobileNavColor] = useState("");
    const [mobileNavTextColor, setMobileNavTextColor] = useState("");
    const [footerColor, setFooterColor] = useState("");
    const [footerTextColor, setFooterTextColor] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [tertiaryColor, setTertiaryColor] = useState("");
    const [bodyFont, setBodyFont] = useState("");
    const [headingFont, setHeadingFont] = useState(""); 

    const baseURL = import.meta.env.VITE_BASEURL;

    useEffect(() => {
        axios.get(`${baseURL}wp-json/custom-theme/v1/customizer-settings`)
        .then(res => {
            setNavTextColor(res.data.nav_text_color);
            setMobileNavColor(res.data.mobile_nav_color);
            setMobileNavTextColor(res.data.mobile_nav_text_color);
            setFooterColor(res.data.footer_color);
            setFooterTextColor(res.data.footer_text_color);
            setPrimaryColor(res.data.primary_color);
            setSecondaryColor(res.data.secondary_color);
            setTertiaryColor(res.data.tertiary_color);
            setBodyFont(res.data.body_font);
            setHeadingFont(res.data.heading_font);
            console.log(res.data);

        })
        .catch(err => console.log('Error Fetching Customizer Settings', err))
    }, [baseURL])

    return { navTextColor, mobileNavColor, mobileNavTextColor, footerColor, footerTextColor, primaryColor, secondaryColor, tertiaryColor, bodyFont, headingFont};
}
export default useCustomizer;