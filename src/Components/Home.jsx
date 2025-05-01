import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import img from './Image/1.png';
import img2 from './Image/5.png'
import img3 from './Image/3.png'
import img4 from './Image/8.png'
import img5 from './Image/11.jpg'
import Footer from './Footer';



export default function Home() {

    let navigate = useNavigate()

    let [toggle, setShowToggle] = useState(false)
    const [currentPage, setCurrentPage] = useState()

    const [input, setInput] = useState("")

    console.log(currentPage)

    let showList = (page) => {
        setShowToggle(!toggle)
        setCurrentPage(page)
    }

    function handleChangePage() {
        navigate(`/room/${input}`)

    }

    function handleMeeting(meetingType) {
        if (meetingType === 'newMeeting') {
            const newRoomId = Date.now().toString(36);
            navigate(`/room/${newRoomId}`);
        } else {
            console.log("Meeting type selected:", meetingType);
        }
    }





    return (
        <>
            <div className='first-slide'>
                {/* Overlay for background blur */}
                <div className={`overlay ${toggle ? "open" : ""}`} onClick={() => setShowToggle(false)} />
                {/* sidebar for open and close */}
                <div className={`sidebar ${toggle ? "open" : ""}`} >
                    {currentPage === 'join' && <JoinMeet setInput={setInput} handleChangePage={handleChangePage} input={input} />}

                </div>
                <div className='chai-container'>
                    <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <a href='/'><img src={img} width={'55px'} height={'50px'}    className='animate-up' /></a>
                        <h2 className='' style={{ font: '1.9rem' }}>Chai-Meet.</h2>
                    </div>
                    <div className='Chai-list'  >
                        <ul>

                            <li onClick={() => showList('join')}>Chai-Join-Meet</li>
                            <li onClick={() => handleMeeting('newMeeting')}>Chai-New-Meeting</li>
                            <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link></li>
                            <li className='' style={{ fontSize: '1.3rem', }}><Link to="/ques" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'center' }}><IoMdHelpCircleOutline /></Link></li>
                            <li className='' style={{ display: 'flex', justifyContent: 'center' }}> <a href="https://github.com/anuj6397"style={{fontSize:'1rem'}}><FaGithub /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='chai-hero'>
                    <div className=''>
                        <h1>Welcome to Chai-Meet, the Seamless </h1>
                        <span> Video Conferencing Platform</span>
                    </div>
                </div>
                <div className='chai-hero2'>
                    <p>Connect, collaborate, and communicate effortlessly with friends and colleagues on a platform </p>
                    <p>designed for all your video conferencing needs</p>
                </div>
                <div id='home'>
                    <input className='put' type='text' placeholder='Join or Create a Room' value={input} onChange={(event) => setInput(event.target.value)} />
                    <button className='btn' onClick={handleChangePage}>Join Now</button>
                </div>

            </div>
            <div className='chai-container' style={{ display: 'flex', }}>
                <div className="card">
                    <img src={img2} width={'200px'} height={'150px'} alt="Card image" />
                    <div className="card-body">

                        <div className="card-text">
                            <p>
                                This image represents a virtual group meeting or video call, where people are connected in a circle,
                                symbolizing teamwork and collaboration. Each person is placed around a central hub, showing how video conferencing
                                brings individuals together to communicate, share ideas, and work as a team from different locations.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="card" >
                    <img src={img3} width={'150px'} height={'150px'} alt="Card image" />
                    <div className="card-body">

                        <div className="card-text">
                            <p>
                                This image shows a group video call with people smiling inside different video windows. It represents a virtual meeting or online communication platform
                                where users connect through video chat. Each person appears in a separate frame,
                                showing how modern video calling websites allow real-time interaction from different locations.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <img src={img4} width={'150px'} height={'150px'} alt="Card image" />
                    <div className="card-body">

                        <div className="card-text">
                            <p>
                                <strong>VideoMeet</strong> is an easy and fun website where couples or friends can eat together online.
                                You can talk on video, order food, and enjoy cute backgrounds.
                                It feels like you're sitting together, even if you're far apart.
                                Perfect for long-distance relationships or friends who miss sharing meals and moments.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="chai-card">
                <img src={img5} width={'300px'} height={'300px'} alt="Card image" />
                <div className="chai-body">

                    <div className="chai-text">
                        <h3>Introduction<RiUserStarLine style={{color:'green',marginLeft:'10px'}} /></h3>
                        <h4>Chai-Meet is a simple and interactive video calling platform that allows users to connect face-to-face anytime, from anywhere.</h4>

                        <ul>
                            <li><IoShieldCheckmarkOutline className=''style={{color:'green',marginRight: '10px'}} />User-friendly interface for smooth and quick video calls.</li>
                            <li><IoShieldCheckmarkOutline className=''style={{color:'green',marginRight: '10px'}} />Real-time audio-video communication using webcam and mic.</li>
                            <li><IoShieldCheckmarkOutline className=''style={{color:'green',marginRight: '10px'}} />Accessible from any device — mobile, tablet, or desktop.</li>
                        </ul>
                        <div className='chai-Instant'>
                            <button className='chai-add'onClick={() => handleMeeting('newMeeting')}><IoMdAdd style={{marginRight:'8px',fontSize:'1.6rem'}}/>Start Instant Meeting</button>
                        </div>
                    </div>
               </div>
            </div>
            <div>
                <Footer/>
                </div>




        </>


    )
}
function JoinMeet({ handleChangePage, setInput, input }) {
    return (
        <div className="join-meeting">
            <h2 className='meet'>Join a Meeting</h2>
            <input className='In' type="text" placeholder="Enter Room ID" value={input} onChange={(event) => setInput(event.target.value)} />
            <button className='join-btn' onClick={handleChangePage}>Join Now</button>
        </div>
    );
}
