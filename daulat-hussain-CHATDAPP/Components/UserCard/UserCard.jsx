import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import S from './UserCard.module.css'


const USERCARD = ( {el , i , addFriend }) => {
  //const {currentUserAddress}=useContext(ChatContext);
  return (
    <div className={S.UserCard}>
      <div className={S.UserCard_box}>
          <div className={S.svg}>
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18.7083C17.4832 16.375 15.5357 15 12.0001 15C8.46459 15 6.51676 16.375 6 18.7083M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 12C13.3333 12 14 11.2857 14 9.5C14 7.71429 13.3333 7 12 7C10.6667 7 10 7.71429 10 9.5C10 11.2857 10.6667 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          
          <div className={S.UserCard_boxInfo}>
              <h3>
                {el.name} 
              </h3>

              <p className={S.fd}> {el.accountAddress} </p>

            {/* <button className={S.UserCard_boxInfoBtn} onClick={()=>addFriend({name:el.name ,accountAddress:el.address} ) }>
                ADD FRIEND
                </button>   */}

          </div>
      </div>

      <small className={S.number}>
        {i+1}
      </small>
    </div>
  )
}

export default USERCARD