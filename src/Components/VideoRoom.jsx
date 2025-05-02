import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function VideoRoom() {
   const{roomID}= useParams()

 const myMeeting = async(element)=>{
    const appID = 612205221;
    const serverSecret = "d19341fcf3d52f566299701fc55234";
    const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret, roomID, Date.now().toString(),"UserName" )
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link ',
            url:`http://localhost:3001/room/${roomID}`,
            
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to //  [ZegoUIKitPrebuilt.OneONoneCall].
        },

      })
 }



  return (
  <>
      <div className="meeting-wrapper">
      <div ref={myMeeting} className="meeting-box"  />
      </div>
  </>    
  )
}
