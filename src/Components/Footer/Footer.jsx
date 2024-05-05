import React from 'react'
import './Footer.css'
import { MdTrendingFlat } from 'react-icons/md'

function Footer() {

    const about_links = [
        {
            text: 'Developer Credits'
        },

        {
            text: 'Feedback'
        },

        {
            text: 'Join Us'
        }

    ]

    return (
        <div className='footer-outer-container'>
            <div className="links-container">
                <h2>Links</h2>
                <ul>
                    {
                        about_links.map(item => {
                            return (
                                <li>
                                    <div className="footer-link-icon-container">
                                        <MdTrendingFlat />
                                    </div>
                                    <span>{item.text}</span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <div className="socials-main-container">
                    <div className="social-container">
                        
                    </div>
            </div>
        </div>
    )
}

export default Footer