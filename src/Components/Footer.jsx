import React from "react";
import faceBookicon from '../img/icons8-facebook-50.png'
import gitHub from '../img/icons8-github-50.png'
import Twittericon from '../img/icons8-twitter-50.png'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="social-icons">
                <img src={faceBookicon} alt="" />
                <img src={Twittericon} alt="" />
                <img src={gitHub} alt="" />
            </div>
        </footer>
    )
}