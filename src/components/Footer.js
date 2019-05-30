import React from 'react';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className="footer__title">{props.title}</h1>
            {props.subtitle_footer && <a href="https://github.com/Binotto/indecision-app" className="footer__subtitle footer_github">
                <i className="fa fa-github"></i>
                {props.subtitle_footer}
            </a>}
        </div>
    </div>
);

Footer.defaultProps = {
    title: 'Made By Matheus Binotto'
};

export default Footer;