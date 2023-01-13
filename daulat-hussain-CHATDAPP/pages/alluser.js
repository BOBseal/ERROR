import React,{useState, useEffect, useContext} from 'react'
import { USERCARD } from '../Components/index.js'
import S from '../styles/alluser.module.css'
import { ChatContext } from '../context/ChatContext'

const allUser = () => {
    const {userLists , addFreind} = useContext(ChatContext);
  return (
    <div className={S.Main}>
        <div>

                <div className={S.alluserinfo}>
                    <h1>
                        FIND {"&"} ADD YOUR FRIENDS
                    </h1>
                    
                </div>

                <div className={S.alluser}>
                    {userLists.map((el,i) =>(
                        <USERCARD key={i+1} el={el} i={i} addFreind={addFreind}/>
                    ) )}
                    
                </div>

        </div>
    </div>
  )
}

export default allUser