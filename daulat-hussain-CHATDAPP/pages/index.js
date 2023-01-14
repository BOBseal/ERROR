import React,{useState, useEffect , useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
import { Loader } from '../Components/index';
import { Filter } from '../Components/index';
import { Friend } from '../Components/index';
import Card from '../Components/Friend/Card/Card';
const ChatApp= () => {

 // const {} = useContext(ChatContext);
  return (
    <div>
      <Filter/>
      <Friend/>
    </div>
  )
};

export default ChatApp