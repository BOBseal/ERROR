import React, { useState,useContext,useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import COMINGSOON from './comingsoon'
//import { connectingWithContract } from '../Utils/apiFeatures'
import Blog from '../Components/Blog/ReadBlog'
const blog = () => {
  const {PostToBlackBoard,blogs} = useContext(ChatContext);
  const [asd , setasd] = useState(false);
  const [a,aa] =useState("");
  const [b,ab] =useState("");
  const [c,ac] =useState("");
//  const [y,yy] = useState("");
 // const [z,zz] = useState("");
 console.log(blogs)
  return (
    <>
    {asd? <COMINGSOON/>
    :<>
    <input type={"text"} onChange={(e)=> aa(e)}/>
    <input type={"text"} onChange={(e)=> ab(e)}/>
    <input type={"text"}onChange={(e)=> ac(e)}/>
    
    <button onClick={()=> PostToBlackBoard(a,b,c)}>Post</button>
    <div>
    {blogs.map((el,i)=>(
      <Blog key={i+1} el={el} i={i}/>
    ))
    }
    </div>
    </>}
    </>
  )
}

export default blog