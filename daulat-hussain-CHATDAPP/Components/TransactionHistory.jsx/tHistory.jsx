
import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import { Loader } from '../index'


const THistory = () => {
const {account } =useContext(ChatContext);
const [openBox , setOpenBox] = useState(false);
const [readMessage , setReadMessage] = useState("");
const Transactions = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
 return (
    <div>
        <h2>TRANSACTION HISTORY</h2>
        <div>
           {Transactions.map((el,i) => (
               <div key={i+1}>
                   <div>
                       <p><span>Transaction No :</span> {i+1}</p>
                       <p><span>TO :</span> 0x...</p>
                       <p><span>FROM :</span> 0x...</p>
                       <p><span>AMT :</span> 0.00</p>
                       <p><span>TAG :</span> tag</p>
                       <p><span>Message :</span> msg.slice()</p>
                   </div>
               </div>
           ))}
        </div>
    </div>
  )
}

export default THistory