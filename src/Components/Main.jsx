import React from "react";
import emailIcon from '../img/icons8-email-50.png'        


export default function Main() {
    const handleEmailClick = () => {
        window.location.href = 'matthew: mattewokadinya@gmail.com'
    }
    return(
        <main>
            <div className="Profile">
                <div className="links">
                    <button className="email" onClick={handleEmailClick}>
                        <img src={emailIcon} alt="" />
                        <p>E-mail</p>
                    </button>
                </div>
            </div>
        </main>
    )
}