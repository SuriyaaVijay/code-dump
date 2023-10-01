import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faGithub,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">                
                <div className="item1">
                    <span style={{ paddingRight: 3 }}>Made by  </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 3 }}>
                        2023 : Suriyaa V 
                    </span>
                </div>
                <a
                    href="https://github.com/SuriyaaVijay"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/suriyaa-v/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.instagram.com/suriyxa/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="mailto:suriyaa.cse@gmail.com"
                    target="_blank"
                    className="item6"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </a>                
            </div>
        </footer>
    );
};

export default Footer;