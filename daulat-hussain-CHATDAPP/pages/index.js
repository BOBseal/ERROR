import React,{useState, useEffect , useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
//import { Loader } from '../Components';
import { NavBar } from '../Components/index';
import { USERCARD } from '../Components/index';
import { Filter } from '../Components/index';
import { Friend } from '../Components/index';
const ChatApp= () => {

 // const {} = useContext(ChatContext);
  return (
    <div>

      {/*<USERCARD/>*/}
      <Filter/>
      <Friend/>
    </div>
  )
};

export default ChatApp