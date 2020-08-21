import React from 'react'

import './Profile.css'

function Profile({ hideSource }) {
    return (
        <div className={`profile ${hideSource ? "hideSource" : ""}`}>

            <p>Check out my profile <a href="https://www.linkedin.com/in/satyavamsi/" target="_blank">here</a></p>
            {!hideSource && <hr style={{ maxWidth: 360, margin: 'auto' }}></hr>}
            {!hideSource && <p>This project is built using React.js and Google's Custom Search API</p>}
            {!hideSource && <p>Check out the source code <a href="https://github.com/satyavamsi/google" target="_blank">here</a></p>}

        </div>
    )
}

export default Profile
