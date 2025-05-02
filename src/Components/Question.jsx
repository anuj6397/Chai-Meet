import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineWechat } from "react-icons/ai";
import img from './Image/imgbin_bf7abf23d76c269220ca9994c69f594f.png'


export default function Question() {

    let[question,setQuestion]=useState("")
    let[answer,setAnswer]=useState("")

  console.log(answer)
 async function generateAnswer(){
         console.log("loding....")
  const response = await axios({url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAjJYVWix7gT1sg5rRCHX-IfmqLUbisfbll",
  method:"post" ,
  data: {
    "contents": [
      {
        "parts": [ { "text": question } ]
      }
    ]
  }
})
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
}
return (
    <>
    <div className='ques-container'>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
           
        <h1>ChatAI</h1>
        <img src={img} width={'100px'} height={"100px"} />
        </div>
    <div className=''style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
     
        <textarea className=''style={{marginTop:'3rem',fontSize:'1.4rem'}} value={question} onChange={(e)=>setQuestion(e.target.value)} name='text' placeholder='Ask anything to me' cols='100' rows='10'></textarea>
        </div> 
     <div className=''style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem',gap:'20px'}}>  
    <button className='chai-btn' onClick={generateAnswer}>Chat AI <AiOutlineWechat style={{fontSize:'1.5rem'}} /></button>
    
    </div>
    
    <div className='answer-container'style={{marginTop:'3rem',}}>
    <pre className='answer'>{answer}</pre>
    </div>
    </div>
    </> 
  )
}
