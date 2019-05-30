import React from 'react';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <h1 className="footer__title">{props.title}</h1>
            {props.subtitle_footer && <h2 className="footer__subtitle">{props.subtitle_footer}</h2>}
        </div>
    </div>
);

Footer.defaultProps = {
    title: 'Made By Matheus Binotto'
};

export default Footer;