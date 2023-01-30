import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
import { Loader } from '../Components/index'
import {FaPaperPlane} from 'react-icons/fa'
import THistory from '../Components/TransactionHistory.jsx/tHistory'
import Style from '../styles/comingsoon.module.css'

const Transfer = () => {
const {sendMatic,account,loading,Balance ,b} =useContext(ChatContext);
const [transferAmt, settransferAmt] = useState('');
const [transferAccount, settransferAccount] = useState("");
const [message, setmessage] = useState("");
const [keyWord , setKeyWord] = useState("");
const [openBox , setOpenBox] = useState(false);

return (
    <div>

       <div>
            <h1>
                WORMHOLE
            </h1>
            <p>Wormhole is a Money Transfer Functionality utilizing a Smart Contract for its core and thus removing access of Thirdparty into your wallet and into the Transaction Process.{""} Transfer Matic and Keep a Record of the Transaction By assigning it a Tag and a Message as Extra MetaData that will stay forever on the Blockchain </p>
            <p></p>
            <div>
                <div>
                    <h2>TRANSFER FANTOM</h2>
                    <div>
                        <p></p>
                        <p>Your Address: {account.slice(0,4)}...{account.slice(36)}</p>
                        <p>Balance: {Balance} FTM</p>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Type Address" onChange={(e)=> settransferAccount(e.target.value) }/>
                        </div>
                        <div>
                            <input type="text" placeholder="Message" onChange={(e)=> setmessage(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder="TAG" onChange={(e) => setKeyWord(e.target.value)}/>
                        </div>
                        <div>
                            <input type="number" placeholder="Quantiy" onChange={(e) => settransferAmt(e.target.value)}/>
                        </div>
                        {loading ? <> <div className={Style.REXX}>
                            <svg className={Style.PulseDots} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            
                            <svg className={Style.PulseDots2} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            <svg className={Style.PulseDots3} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            
                            </div>
                        </>:
                       <div>
                        { !account ?  <>
                            <div className={Style.REX}><h3>LOADING</h3>
                            <svg className={Style.PulseDots} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#ff0000" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            
                            <svg className={Style.PulseDots2} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#40ff00" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            <svg className={Style.PulseDots3} width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#00e6e6" fill-rule="evenodd" d="M8 3a5 5 0 100 10A5 5 0 008 3zm0 1.5v7a3.5 3.5 0 100-7z" clip-rule="evenodd"/></svg>
                            
                            </div>
                        </> :<>
                           { keyWord&&message&&transferAccount&&transferAmt  ?
                           <button onClick={()=>sendMatic(transferAccount, transferAmt,message,keyWord) }> SEND{""} <FaPaperPlane/></button> :
                           <p>All Fields are Necessary before Transacting</p>
                            }
                            </>}
                       </div>}
                    </div>
                </div>
            </div>

           <div>
               <button onClick={()=> setOpenBox(true)}>History</button>
               {openBox ==true? (<> <button onClick={()=> setOpenBox(false)}>Close</button> <THistory/> </>):""}
               {""}
            </div>
       </div>
    </div>
  )
}

export default Transfer