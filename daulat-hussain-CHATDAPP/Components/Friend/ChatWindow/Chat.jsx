import React,{useState, useEffect, useContext} from 'react'
import S from './Chat.module.css';
import { useRouter } from 'next/router';
import{convertTime} from '../../../Utils/apiFeatures'
import { Loader } from '../../index';
import {FaPaperPlane , FaPaperclip} from 'react-icons/fa'


const Chat = ({seND,  friendMsg, 
    loading,currentUserName,currentUserAddress }) => {
  const [message, setmessage] = useState('');
  const [chatData, setchatData] = useState({name: "" , address: ""});
  const router = useRouter();

  useEffect(()=>{
      if(!router.isReady) return setchatData(router.query);
  },[router.isReady]);

 return (
    <div className={S.Chat}>
        {currentUserName && currentUserAddress ? (
            
            <div className={S.ChatUserInfo}>
                     <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 18.7083C17.4832 16.375 15.5357 15 12.0001 15C8.46459 15 6.51676 16.375 6 18.7083M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 12C13.3333 12 14 11.2857 14 9.5C14 7.71429 13.3333 7 12 7C10.6667 7 10 7.71429 10 9.5C10 11.2857 10.6667 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                <div className={S.ChatUserInfoBox}>
                    <h4>User: {currentUserName}</h4>
                    <p className={S.HDmobile}>
                       Address: {currentUserAddress.slice(0,3)}...{currentUserAddress.slice(38)}
                    </p>
                </div>   
            </div>
            
        ): ("") }

        <div className={S.ChatBox}>
                <div className={S.ChatBoxLeft}>
                    {friendMsg.map((el,i)=>(
                        <div className={S.Boxx}>
                            { el.sender == chatData.address ?(
                                <div className={S.ChatBoxLeftTitle}>
                                    <span>
                                        {chatData.name} {""}
                                        <small>Time:{convertTime(el.timestamp)}</small>
                                    </span>
                                </div>
                            ):(
                                <span>
                                       <h5> from :{el.sender.slice(0,3)}...{el.sender.slice(38)} </h5>{""}
                                        <small>Time:{convertTime(el.timestamp)}</small>
                                    </span>
                            )}
                            <div key={i+1} className={S.msg}>
                                <h5>Message :</h5>
                                <p>{el.msg.slice(0,64)} </p>
                                <p>{el.msg.slice(64,128)} </p>
                                <p>{el.msg.slice(128,192)} </p>
                                <p>{el.msg.slice(192,256)} </p>
                                <p>{el.msg.slice(256,320)} </p>
                                <p>{el.msg.slice(320,384)} </p>
                                <p>{el.msg.slice(384,448)} </p>
                                <p>{el.msg.slice(448,512)} </p>
                                <p>{el.msg.slice(512,576)} </p>
                                <p>{el.msg.slice(576,640)} </p>
                            </div>
                        </div>
                    ))}
                </div>

            {currentUserName && currentUserAddress ? (
            <>
                <div className={S.ChatBoxSnd}>
                    <div className={S.ChatBoxSndImg}>
                        <input type='text' placeholder='Must be from 1 to 640 Characters' onChange={(e)=>setmessage(e.target.value)} className={S.INPUT} maxLength={640} minLength={1}/>
                        {loading == true?(<Loader/>):(
                        <div className={S.SSSS}>
                          { message? <button className={S.SSSS} onClick={()=> seND({ address:currentUserAddress,msg: message})}><FaPaperPlane/> SEND</button>:<h5 className={S.SSSS} >Type Something first</h5>}
                        </div>
                        )}
                        
                    </div>
                    
                </div>
            </>
            ):("") }
        </div>
    </div>
    )
}


export default Chat