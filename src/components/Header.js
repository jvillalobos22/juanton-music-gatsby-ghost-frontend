import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import React from "react";
import juantonLogo from "../images/juanton_logo_cropped.png";

const Layout = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1420px;
    padding: 0 18px;
`;

const LinkSC = styled(Link)`
    width: 140px;
    display: block;

    img {
        width: 100%;
    }
`;

// const Header = ({ siteTitle }) => (
const Header = () => (
    <header>
        <Layout>
            <LinkSC
                to="/newHome"
                style={{
                    color: `white`,
                    textDecoration: `none`
                }}
            >
                <img
                    src={juantonLogo}
                    alt="JV - Initials of Juan
                  Villalobos"
                />
            </LinkSC>
            {/* <h1 style={{ margin: 0 }}>{siteTitle}</h1> */}
        </Layout>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
