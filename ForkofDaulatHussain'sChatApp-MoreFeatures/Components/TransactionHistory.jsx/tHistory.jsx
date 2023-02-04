
import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import { Loader } from '../index'


const THistory = () => {
const {account, transactionCount,getAllTransactions } =useContext(ChatContext);
const [openBox , setOpenBox] = useState(false);
const [readMessage , setReadMessage] = useState("");

useEffect(() => {
  getAllTransactions;
}, [])

 return (
    <div>
        <h3>Data Display temporarily Unavailble , Please use BlockExplorer</h3>
        <h2>TRANSACTION HISTORY</h2>
        <div>
           {getAllTransactions.flatMap((el,transactionCount) => (
               <div key={transactionCount+1}>
                   <div>
                       <p><span>Transaction No :</span> #{transactionCount+1}-<small>{el.timestamp}</small></p>
                       <p><span>TO :</span> {el.addressTo}</p>
                       <p><span>FROM :</span> {el.addressFrom}</p>
                       <p><span>AMT :</span> {el.amount}</p>
                       <p><span>TAG :</span> {el.tag}</p>
                      {/* <p><span>Message :</span> msg.slice()</p>*/}
                   </div>
               </div>
           ))}
        </div>
    </div>
  )
}

export default THistory