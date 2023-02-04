import React,{useState, useContext , useEffect} from 'react'
import Card from './Card/Card'
import Chat from './ChatWindow/Chat'
import { ChatContext } from '../../context/ChatContext'
import S from './Friend.module.css'

const Friend = () => {
  //const array = [1,2,3,4,5,5,,6,6,6,6,];
  const {readMessage , createAccount , addFriend , sendMessage , readUser,
    account,userName,friendLists,friendMsg,userLists,loading,error,currentUserName ,currentUserAddress ,transferEth} = useContext(ChatContext);
    const [open , setOpen] = useState(false);

  return (
    <div className={S.Friend}>
      <div className={S.Friend_box}>
          <div className={S.Friend_boxLeft}>
            <h2>Your Friend List</h2>
            <div className={S.dd}>
              {friendLists.map( (el , i) => 
              <Card key={i + 1} el={el} i={i} readMessage={readMessage} readUser={readUser} />
              ) }
              </div>
          </div>
          <div className={S.Friend_boxRight}>
               <Chat seND={sendMessage} readMessage={readMessage} friendMsg={friendMsg} account={account} userName={userName} 
                loading={loading} currentUserName={currentUserName} currentUserAddress={currentUserAddress} transferEth={transferEth}/>
          </div>

      </div>
    </div>
  )
}

export default Friend