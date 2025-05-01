import React from 'react'
import img from './Image/7.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { DiAndroid } from 'react-icons/di'

export default function Footer() {
    return (
        <>
            <div className='footer-container'>

                <div className='footer-1'>
                    <img src={img} height={"250px"} width={"270px"} />
                </div>


                <div className='footer-2'>
                    <h2 className='footer-heading'>Chai-meet</h2>
                    <div className='footer-3'>
                        <p>✨ Chai-Meet — where ideas brew over virtual cups of chai.</p>
                        <p>💬 Conversations that spark creativity and collaboration.</p>
                    </div>
                       <div className='social-media-icon' style={{ display: 'flex'}}>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', gap: '1.5rem', padding: 0,marginTop:'2rem' }}>
                                  <li>
                                    <a href='https://www.linkedin.com/in/anuj-rajput-7279b81b9/' target='_blank' rel='noopener noreferrer'>
                                      <FaLinkedin style={{ fontSize: '2rem', color: '#0077B5' }} />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='https://github.com/anuj6397' target='_blank' rel='noopener noreferrer'>
                                      <FaGithub style={{ fontSize: '2rem', color: '#000' }} />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='https://www.instagram.com/__anujrajput_6397/' target='_blank' rel='noopener noreferrer'>
                                      <FaInstagram style={{ fontSize: '2rem', color: '#E1306C' }} />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ques' target='_blank'>
                                      <DiAndroid style={{ fontSize: '2rem', color: 'green' }} />
                                    </a>
                                  </li>
                                </ul>
                              </div>


                </div>
                </div>
                 <hr/>
                <div className='footer-4'>
                    <p>Copyright © 2025 Chai-Meet | Made with ❤️ by Anuj 21BCS4654 | All Rights Reserved</p>
                </div>
                
        </>
    )
}
