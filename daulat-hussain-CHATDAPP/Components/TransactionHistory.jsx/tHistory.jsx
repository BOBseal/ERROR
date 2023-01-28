
import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import { Loader } from '../index'


const THistory = () => {
const {account, transactionCount,getAllTransactions } =useContext(ChatContext);
const [openBox , setOpenBox] = useState(false);
const [readMessage , setReadMessage] = useState("");
const Transactions =[{transactionCount}];

useEffect(() => {
  getAllTransactions;
}, [])

 return (
    <div>
        <h2>TRANSACTION HISTORY</h2>
        <div>
        <button onClick={()=>(setOpenBox(true) , setReadMessage(el.message)) }>
                       Show Message
                   </button>
                   <button onClick={()=> setOpenBox(false)}>Hide Messages</button>
           {Transactions.map((el,i) => (
               <div key={i+1}>
                   <div>
                       <p><span>Transaction No :</span> #{i+1}-<small>{el.timestamp}</small></p>
                       <p><span>TO :</span> {el.addressTo}</p>
                       <p><span>FROM :</span> {el.addressFrom}</p>
                       <p><span>AMT :</span> {el.amount}</p>
                       <p><span>TAG :</span> {el.tag}</p>
                      {/* <p><span>Message :</span> msg.slice()</p>*/}
                      {
                       openBox == true ? (<>
                       <div>
                           <div>
                           <p><span>Message :</span> {el.message}</p>
                               
                           </div>
                       </div>
                       </>):""
                   }
                   </div>
               </div>
           ))}
        </div>
    </div>
  )
}

export default THistory