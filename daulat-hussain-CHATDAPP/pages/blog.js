import React, { useState,useContext,useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import COMINGSOON from './comingsoon'
const blog = () => {
  const {PostToBlackBoard,ViewBlackBoard} = useContext(ChatContext);
  const [asd , setasd] = useState(false);
  const [a,aa] =useState("");
  const [b,ab] =useState("");
  const [c,ac] =useState("");


  return (
    <>
    {asd? <COMINGSOON/>
    :<>
    
    
    
    <input type={"text"} onChange={(e)=> aa(e)}/>
    <input type={"text"} onChange={(e)=> ab(e)}/>
    <input type={"text"}onChange={(e)=> ac(e)}/>
    
    <button onClick={()=> PostToBlackBoard(a,b,c)}>Post</button>
    
    </>}
    </>
  )
}

export default blog