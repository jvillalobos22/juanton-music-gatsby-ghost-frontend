import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CallToAction = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    p {
        width: 100%;
        margin-bottom: 1rem;
    }
`;

// const LinkToMusicButton = styled.button`
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     width: 200px;
//     height: 40px;
//     font-size: 12px;
//     text-transform: uppercase;
//     font-weight: 300;
//     letter-spacing: 3px;
//     border: 1px solid #fff;
//     color: #fff;

//     &:hover,
//     &:focus,
//     &:active {
//         background-color: #fff;
//         color: #222;
//     }
// `;

const EnterSiteButton = styled(({ children, ...rest }) => (
    <button {...rest}>{children}</button>
))`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 3px;
    border: 1px solid #fff;
    color: #fff;
    margin-bottom: 2rem;
    background: transparent;

    &:hover,
    &:focus,
    &:active {
        background-color: #fff;
        color: #222;
    }
`;

const ResponsiveSouncloudPlayer = styled.div`
    width: 100%;
    margin-top: 3rem;
    p {
        margin-bottom: 1.5rem;
    }
    iframe {
        max-width: 700px;
    }
`;

// eslint-disable-next-line arrow-body-style
const EnterSiteCTA = ({ onClick }) => {
    // const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    // const openPlayer = () => setIsPlayerOpen(true);
    return (
        <CallToAction>
            <EnterSiteButton onClick={onClick}>Enter Site</EnterSiteButton>
            <ResponsiveSouncloudPlayer>
                <p>New music out now on Late Night Munchies!</p>
                <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/690362245&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                ></iframe>
            </ResponsiveSouncloudPlayer>
        </CallToAction>
    );
};

EnterSiteCTA.propTypes = {
    onClick: PropTypes.func
};

EnterSiteCTA.defaultProps = {
    onClick: undefined
};

export default EnterSiteCTA;
