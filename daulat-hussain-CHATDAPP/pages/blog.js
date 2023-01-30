import React, { useState,useContext,useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
//import COMINGSOON from './comingsoon'
//import { connectingWithContract } from '../Utils/apiFeatures'

const blog =() => {
  const {PostToBlackBoard,blogs} = useContext(ChatContext);
  const [a,aa] =useState("");
  const [b,ab] =useState("");
  const [c,ac] =useState("");
 {/* const [contract,tttt] = useState();
  const cont = async()=>{
    const ctr = await connectingWithContract();
    tttt(ctr);
  };
useEffect(()=>{
  cont();
  const ftd=async()=>{
    const rt = await contract.readBlogs(title);
    setasd(rt)
  }
  ftd();
},[contract]);*/}

//  const [y,yy] = useState("");
//onClick={()=> PostToBlackBoard(a,b,c)}
 // const [z,zz] = useState("");
  return (
   <>
    <div>
      <h4>Author Name</h4>
    <input type={"text"} onChange={(e)=> aa(e)}/>
    </div>

    <div>
      <h4>Post Heading</h4>
    <input type={"text"} onChange={(e)=> ab(e)}/>
    </div>

    <div>
      <p>Type your Post</p>
    <input type={"text"}onChange={(e)=> ac(e)}/>
    </div>

    <button >Disabled</button>
    <div>
    {blogs.map((blog,index)=>(
      <div key={index+1}>
        <h1>{blog.title}</h1>
        <p>Author Name: {blog.author}</p>
        <small>Author Address: {blog.authorAddress}</small>
        <small> {}</small>
        <p>{blog.post}</p>
      </div>
    ))}
    </div>
    </>
  )
}

export default blog