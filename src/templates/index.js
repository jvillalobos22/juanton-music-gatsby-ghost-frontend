import React from "react";
import styled from "styled-components";

// import SEO from "../components/seo";
import HeroImage from "../images/juanton_nye_14_1920x1280.jpg";
import juantonLogo from "../images/juanton_logo_cropped.png";
import EnterSiteCTA from "../components/EnterSiteCTA";

import "../styles/original.css";
import "../styles/global.css";

const HomePageBackground = styled.div`
    width: "100%";
    height: 100vh;
    background-image: url(${HeroImage});
    position: relative;
    z-index: 1;
    color: #fff;

    &:after {
        content: "";
        position: absolute;
        z-index: 5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        witdth: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const LayoutSC = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100vh;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 16px;
`;

const CenteredContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
`;

const JuantonLogoCenter = styled.img`
    width: 100%;
    max-width: 400px;
    margin-bottom: 1.5rem;
`;

const HomeSplashPage = () => (
    <HomePageBackground>
        <LayoutSC>
            {/* <SEO title="Juanton Music | Home" /> */}
            <CenteredContent>
                <JuantonLogoCenter
                    src={juantonLogo}
                    alt="JV - Initials of Juan
                  Villalobos"
                />
                <EnterSiteCTA />
            </CenteredContent>
        </LayoutSC>
    </HomePageBackground>
);

export default HomeSplashPage;
