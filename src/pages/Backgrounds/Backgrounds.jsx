import React, { useState, useEffect } from "react";
import { useLanguage } from '../../layout/LanguageProvider/Language.jsx';
import { portuguese, english } from '../../translate/languages.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from "../../layout/preLoader/Preloader.jsx";
import Aos from 'aos';
const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};



function Backgrounds() {
    const { language, theme } = useLanguage();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // callApis()
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        Aos.init({ once: true });
    }, []);
    const bg_home = theme == false ? { backgroundImage: "url('/img/bg_home.jpg')" } : { backgroundImage: "url('/img/background-white.png')", opacity: '1' }
   

    

    const parallaxImages = document.querySelectorAll(".parallax-wrap img");
    document.addEventListener("mousemove", parallax);

    function parallax(event) {

        const { pageX, pageY } = event;

        parallaxImages.forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - pageX * position) / 200;
            const y = (window.innerHeight - pageY * position) / 200;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
    const bg_projects = theme == false ? '/img/bg_home.jpg' : '/img/white_fluid.jpg'




    return (
        <>
            {isLoading ? <Preloader /> : <> </>}
            <div class='default-project' style={{ backgroundImage: `url(${bg_projects})` }}>
                <div class="parallax-wrap" data-aos="zoom-in" data-aos-duration="1000">
                    <img value="4" src={bg_projects} />
                </div>
            </div>
            <div class='page-home'>
                
                <div class="main" style={bg_home}>
                    <div class="d1" style={bg_home}></div>
                    <div class="d2" style={bg_home}></div>
                    <div class="d3" style={bg_home}></div>
                    <div class="d4" style={bg_home}></div>
                </div>
            </div>
            
            <div class='stars' style={theme == false ? { background: "black" } : { background: "white" }}>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
        </>
    )
}

export default Backgrounds;