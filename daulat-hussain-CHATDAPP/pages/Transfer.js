import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
import { Loader } from '../Components/index'
import {FaPaperPlane} from 'react-icons/fa'
import THistory from '../Components/TransactionHistory.jsx/tHistory'
import Style from '../styles/comingsoon.module.css'

const Transfer = () => {
const {sendMatic,account,loading } =useContext(ChatContext);
const [transferAmt, settransferAmt] = useState('');
const [transferAccount, settransferAccount] = useState("");
const [message, setmessage] = useState("");
const [keyWord , setKeyWord] = useState("");
const [openBox , setOpenBox] = useState(false);

return (
    <div>

       <div>
            <h1>
                Transfer Crypto
            </h1>
            <p>Description... bla bla bla{""}</p>
            <div>
                <div>TRANSFER IMG</div>
                <div>
                    <h2>NOW TRANS ETH</h2>
                    <div>
                        <p></p>
                        <p>acc</p>
                        <p>Balance</p>
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
                        </> :
                            <button onClick={()=>sendMatic(transferAccount, transferAmt,message,keyWord) }> SEND{""} <FaPaperPlane/></button>}
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