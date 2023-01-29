import React,{useState, useEffect, useContext} from 'react'
import { USERCARD } from '../Components/index.js'
import S from '../styles/alluser.module.css'
import { ChatContext } from '../context/ChatContext'

const allUser = () => {
    const {userLists , addFriend} = useContext(ChatContext);
  return (
    <div className={S.Main}>
        <div>

                <div className={S.alluserinfo}>
                    <h1>
                        ALL USER LIST
                    </h1>
                    <small>Forgot Your Friend's ID?You Can Take a Look Manually from the List.</small>
                    <small>You Cannot Add Friends from this Menu Kindly Go back to Home Menu!!!</small>
                </div>

                <div className={S.alluser}>
                    {userLists.map((el,i) =>(
                        <USERCARD key={i+1} el={el} i={i} addFriend={addFriend}/>
                    ) )}
                    
                </div>

        </div>
        <small className={S.beta}>PAGE IN BETA STAGE AND HENCE MOST FUNCTIONS ARE DISABLED RN!!</small>
    </div>
  )
}

export default allUser