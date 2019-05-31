import React from 'react';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <h1 className="footer__title">{props.title}</h1>
            {props.subtitle_footer && <a href="https://github.com/Binotto/indecision-app" className="footer__subtitle footer_github">
                <i className="fa fa-github"></i>
                {props.subtitle_footer.github}
            </a>}
            <br></br>
            {props.subtitle_footer &&<a href="https://www.linkedin.com/in/matheus-binotto-a51787143/" className="footer__subtitle footer_linkedin">
                    <i className="fa fa-linkedin"></i>
                    {props.subtitle_footer.linkedin}
               </a>
            }
        </div>
    </div>
);

Footer.defaultProps = {
    title: 'Made By Matheus Binotto'
};

export default Footer;