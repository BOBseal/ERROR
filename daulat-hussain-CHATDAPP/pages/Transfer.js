import React, {useState,useEffect,useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
import { Loader } from '../Components/index'

const Transfer = () => {
const {sendMatic,account,loading } =useContext(ChatContext);
const [transferAmt, settransferAmt] = useState('');
const [transferAccount, settransferAccount] = useState("");
const [message, setmessage] = useState("");
const [readMessage , setReadMessage] = useState("");
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
                        <p>acc</p>
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
                        {loading ? <Loader/>:
                       <div>
                        { !account ?  <Loader/> :
                            <button onClick={()=>sendMatic(transferAccount, transferAmt,message,keyWord) }> SEND </button>}
                       </div>}
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Transfer