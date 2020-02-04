import React from 'react';
const Footer = () => {
    const title = 'Copyright starSite';
    return <Footbar value={title} />;
};
const Footbar = ({ value }) => {
    return <h6>{value}</h6>;
};
export default Footer;
