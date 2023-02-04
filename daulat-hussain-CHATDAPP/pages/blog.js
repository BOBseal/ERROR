import React, { useState,useContext,useEffect } from 'react'
import { Loader } from '../Components';
import { ChatContext } from '../context/ChatContext'
import {convertTime} from "../Utils/apiFeatures.js"
import S from '../styles/Blo.module.css'
//import COMINGSOON from './comingsoon'
//import { connectingWithContract } from '../Utils/apiFeatures'

const blog =() => {
  const {PostToBlackBoard,blogs,userName,loading,sendLike} = useContext(ChatContext);
  const [a,aa] =useState("");
  const [Title,setTitle] =useState('');
  const [Post,setPost] =useState('');
  const [open,SetOpen] = useState(false);

 
  return (
   <div className={S.main}>
    {/*<div>
      <h4>Author Name</h4>
    <input type="text" onChange={(e)=> aa(e)}/>
    </div>*/}
{open ==true? <div className={S.PostMe}>
    <div>
      <h4>Post Heading</h4>
    <input type="text" onChange={(a)=> setTitle(a.target.value)} maxLength={64}placeholder="Max-64 Characters"/>
    </div>

    <div>
      <h4>Type your Post</h4>
    <input type="text" onChange={(b)=> setPost(b.target.value)} maxLength={2560} placeholder="Max-2560 Characters"/>
    </div> 
    {loading? <Loader/>: <div>{ Title && Post ? <button onClick={()=> PostToBlackBoard(userName,Title,Post)} >Post</button> :"Write First"}</div>}
    <button onClick={()=>SetOpen(false)}> Cancel</button>
</div> : <button onClick={()=>SetOpen(true)} className={S.supa}>Write to BlackBoard </button>}
    <div className={S.fd}>
    {blogs.map((blog,index)=>(
      <div key={index+1} className={S.BlogBox}>
        <h1>{blog.title}</h1>
        <p>Author Name: {blog.author}</p>
        <small>Author Address: {blog.authorAddress}</small>
                               <small> {}</small>
                                <p>{blog.post.slice(0,64)}</p>
                                <p>{blog.post.slice(64,128)}</p>
                                <p>{blog.post.slice(128,192)}</p>
                                <p>{blog.post.slice(192,256)}</p>
                                <p>{blog.post.slice(256,320)}</p>
                                <p>{blog.post.slice(320,384)}</p>
                                <p>{blog.post.slice(384,448)}</p>
                                <p>{blog.post.slice(448,512)}</p>
                                <p>{blog.post.slice(512,576)}</p>
                                <p>{blog.post.slice(576,640)}</p>
                                <p>{blog.post.slice(640,704)}</p>
                                <p>{blog.post.slice(704,768)}</p>
                                <p>{blog.post.slice(768,832)}</p>
                                <p>{blog.post.slice(832,896)}</p>
                                <p>{blog.post.slice(896,960)}</p>
                                <p>{blog.post.slice(960,1024)}</p>
                                <p>{blog.post.slice(1024,1088)}</p>
                                <p>{blog.post.slice(1088,1152)}</p>
                                <p>{blog.post.slice(1152,1216)}</p>
                                <p>{blog.post.slice(1216,1280)}</p>
                                <p>{blog.post.slice(1280,1344)}</p>
                                <p>{blog.post.slice(1344,1408)}</p>
                                <p>{blog.post.slice(1408,1472)}</p>
                                <p>{blog.post.slice(1472,1536)}</p>
                                <p>{blog.post.slice(1536,1600)}</p>
                                <p>{blog.post.slice(1600,1664)}</p>
                                <p>{blog.post.slice(1664,1728)}</p>
                                <p>{blog.post.slice(1728,1792)}</p>
                                <p>{blog.post.slice(1792,1856)}</p>
                                <p>{blog.post.slice(1856,1920)}</p>
                                <p>{blog.post.slice(1920,1984)}</p>
                                <p>{blog.post.slice(1984,2048)}</p>
                                <p>{blog.post.slice(2048,2112)}</p>
                                <p>{blog.post.slice(2112,2176)}</p>
                                <p>{blog.post.slice(2176,2240)}</p>
                                <p>{blog.post.slice(2240,2304)}</p>
                                <p>{blog.post.slice(2304,2368)}</p>
                                <p>{blog.post.slice(2368,2432)}</p>
                                <p>{blog.post.slice(2432,2496)}</p>
                                <p>{blog.post.slice(2496,2560)}</p>
                                <small>{convertTime(blog.time)}</small>
                                <button onClick={()=>sendLike()}> Like</button>
      </div>
      
    ))}
    </div>
    </div>
  )
}

export default blog