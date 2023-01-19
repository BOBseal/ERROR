import React,{useState, useEffect, useContext} from 'react'
import S from './Chat.module.css';
import { useRouter } from 'next/router';
import{convertTime} from '../../../Utils/apiFeatures'
import { Loader } from '../../index';


const Chat = ({functionName, readMessage, friendMsg, account, userName, 
    loading,currentUserName,currentUserAddress}) => {
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
                    <h4>{currentUserName}</h4>
                    <p className={S.HDmobile}>
                        {currentUserAddress}
                    </p>
                </div>   
            </div>
            
        ): ("") }

        <div className={S.ChatBox}>
            <div className={S.ChatBox_BOX}>
                <div className={S.ChatBoxLeft}>
                    {friendMsg.map((el,i)=>(
                        <div>
                            { el.sender == chatData.address ?(
                                <div className={S.ChatBoxLeftTitle}>
                                    <span>
                                        {chatData.name} {""}
                                        <small>Time:{convertTime(el.timestamp)}</small>
                                    </span>
                                </div>
                            ):(
                                <span>
                                        {userName} {""}
                                        <small>Time:{convertTime(el.timestamp)}</small>
                                    </span>
                            )}
                            <p key={i+1}>
                                {el.msg}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}


export default Chat