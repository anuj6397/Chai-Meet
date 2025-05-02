import React from 'react'
import img from './Image/9.webp'
import img2 from './Image/1.png';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { IoIosSend } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Swal from 'sweetalert2'

export default function About() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6dda7c7c-922a-4d7f-b48f-4df1b1be67de");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };



  return (
    <>

      <nav className='contact-continer'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '60px', backgroundColor: '#ac9bd2', paddingLeft: '1rem', }} >
        <a href="/"> <img src={img2} width={'55px'} height={'50px'} alt="Chai-Meet logo" className='rotate' /></a>
          <h2 style={{ fontSize: '1.9rem' }}> Chai-Meet.</h2>
        </div>
      </nav>



      <div className='big-container' style={{ width: '100%', height: '100vh' }}>
        <div style={{ width: '100%', height: '70vh', backgroundColor: '#000000' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '2rem', alignItems: 'center', gap: '1rem', }}>
            <img src={img} width={'100%'} height={'auto'} alt="Main" style={{ maxWidth: '600px', borderRadius: '10px' }} className='rotate' />

            <div style={{ color: 'white' }}>
              <h1 style={{ marginBottom: '1rem' }}>
                Starting a new project or want to collaborate with us? Let's talk!
              </h1>
              <a href="/ques" target="_blank">
                <button style={{ marginTop: '2rem', padding: '0.7rem 1.5rem', fontSize: '1rem', backgroundColor: '#ac9bd2', border: 'none', borderRadius: '8px', cursor: 'pointer', color: '#000', }}>Ask Us Anything!</button></a>
            </div>
          </div>
        </div>

        <div className='box-container'>

          <div
            className="box" >
            <p><a href="https://www.instagram.com/__anujrajput_6397/" target="_blank"><FaInstagram style={{ fontSize: '5rem', color: 'red' }} /></a></p>
            <p style={{ marginTop: '1.5rem', }}><span style={{ fontSize: '1rem' }}>Instagram:</span><br /><a href="https://www.instagram.com/__anujrajput_6397/" target="_blank" style={{ fontSize: '1rem' }}>Visit my Instagram</a></p>
          </div>

          <div
            className="box" >
            <p><a href="https://github.com/anuj6397" style={{ fontSize: '1rem' }}><FaGithub style={{ fontSize: '5rem', color: 'purple' }} /></a></p>
            <p style={{ marginTop: '1.5rem', }}><span style={{ fontSize: '1rem' }}>Github:</span><br /><a href="https://github.com/anuj6397" style={{ fontSize: '1rem' }}>Github.com</a></p>
          </div>

          <div
            className="box" >
            <p><a href="mailto:anujk702441@gmail.com" style={{ fontSize: '0.85rem', marginRight: '20px' }}><MdEmail style={{ fontSize: '5rem', color: 'orange' }} /></a></p>
            <p style={{ marginTop: '1.5rem', }}><span style={{ fontSize: '1rem' }}>Email:</span><br /><a href="mailto:anujk702441@gmail.com" style={{ fontSize: '1rem', marginRight: '25px', marginTop: '1rem' }}>anujk70@gmail.com</a></p>
          </div>

          <div
            className="box" >
            <p><a href="tel:+6397547740"><IoIosCall style={{ fontSize: '5rem', color: 'green' }} /></a></p>
            <p className='contact-text ' style={{ marginTop: '1.5rem', }}><span style={{ color: 'black', fontSize: '1rem' }}>India: </span><br /><a href="tel:+6397547740" style={{ fontSize: '1rem', marginTop: '2rem' }}>+91 0000000000</a></p>
          </div>
        </div>
      </div>

      
      
      
      <div className="chai-body" style={{ marginTop: '7rem', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '2rem', alignItems: 'center', gap: '1rem' }}>
        <div className="chai-text"  >
          <h2 style={{marginLeft:'80px'}}>Get in Touch</h2>
          <div  >
            <ul style={{marginLeft:'80px'}} >
              <li><IoShieldCheckmarkOutline style={{color:'green',marginRight: '10px'}}/>Have an idea or project in mind? Let’s connect and bring it to life with Chai-Meet.</li>
              <li><IoShieldCheckmarkOutline style={{color:'green',marginRight: '10px'}}/>Want to chat, create, or collaborate? Let’s meet up on Chai-Meet — your virtual adda!</li>
              <li><IoShieldCheckmarkOutline style={{color:'green',marginRight: '10px'}}/>Let’s spill some ideas over a virtual chai! Hit us up on Chai-Meet.</li>
            </ul>
          </div>
          <div style={{ display: 'flex'}}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', gap: '1.5rem', padding: 0,marginLeft:'80px' }}>
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



           <form onSubmit={onSubmit}>
           <div className=''style={{marginBottom:'10px',gap:'50px',marginRight:'30px'}} >
        <h3 className='heading'>Name</h3>
        <input type='text' placeholder='Enter the number' name='name' style={{width:'500px',padding:'5px', outline: 'none',fontSize:'1rem',borderRadius: '5px'}}/>
        
        <h3 className='heading'>Email</h3>
        <input type='text' placeholder='Enter the number' name='email' style={{width:'500px',padding:'5px',outline: 'none',fontSize:'1rem',borderRadius: '5px'}}/>
        
        
        <h3 className='heading'>Enter your Message</h3>
        <textarea placeholder='Your message here..' name='message' style={{width:'500px',height:'180px',fontSize:'1rem',borderRadius: '5px'}}/>

        <div  style={{marginTop:"10px"}}>
        <button className='chai-btn'style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'}}>Submit<IoIosSend style={{marginLeft:'1rem',fontSize:'1.5rem'}} /></button>
        </div>
        </div>
        </form>
         </div>
         
    </>
  )
}
