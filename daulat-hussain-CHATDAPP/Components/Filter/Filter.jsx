import React,{useState, useContext} from 'react'
import S from './Filter.module.css'
import { ChatContext } from '../../context/ChatContext'
import { Model } from '../index'

const Filter = () => {
  const {account , addFriend} = useContext(ChatContext);
  const [addFr , setAddFr] = useState(false);

  return (
    <div className={S.Filter}>
      <div className={S.Filter_box}>
        <div className={S.Filter_boxLeft}>
            <div className={S.Filter_boxLeft_search}>
                <>
                <div className={S.svg}> 
                <svg width="20px" height="20px" viewBox="0 0 64 64"  preserveAspectRatio="xMidYMid meet"><path d="M55.217 8.782c-9.044-9.043-23.708-9.043-32.752 0c-8.4 8.402-8.985 21.645-1.779 30.735l-1.893 1.893l-1.572-1.572L4.376 52.682c-.754-.479-1.335-.684-1.572-.445l-.703.701C.958 54.081 9.919 63.044 11.062 61.9l.703-.702c.238-.237.031-.819-.446-1.575L24.163 46.78l-1.573-1.572l1.894-1.892c9.091 7.207 22.331 6.621 30.734-1.78c9.042-9.045 9.044-23.708-.001-32.754m-2.729 30.024c-7.538 7.536-19.757 7.538-27.293 0c-7.537-7.535-7.537-19.758 0-27.293c7.534-7.537 19.757-7.537 27.293 0s7.534 19.756 0 27.293" fill="#000000"></path><path d="M55.317 23.902a16.585 16.585 0 0 1-3.789 5.879c-6.513 6.514-17.076 6.514-23.592-.003a16.61 16.61 0 0 1-4.813-10.243c-2.256 5.949-1 12.926 3.79 17.716c6.515 6.515 17.078 6.515 23.593 0c3.654-3.651 5.255-8.577 4.811-13.349" fill="#000000"></path></svg>
                </div>
                <input type="text" placeholder= "Search.."/>
                </>
            </div>
        </div>

        <div className={S.Filter_boxRight}>
            <button>
              CLEAR
            </button>

            <button onClick={()=> setAddFr(true)}>
              ADD FRIEND
            </button>

        </div>
      </div>

      {addFr && (
        <div className={S.FilterModel}>
            <Model
            openModel={setAddFr}
            title="ADD YOUR"
            head="FRIENDS"
            info="The Add Friends You need Their Registered Name And Their Registered Wallet Address"
            smallInfo= "FILL IN YOUR FRIEND DETAIL"
            functionName={addFriend}
            />
        </div>
      )} 
    </div>
  )
}

export default Filter