import React from 'react'
import { useState , useEffect ,useContext} from 'react'
import Style from './Model.module.css'
import { ChatContext } from '../../context/ChatContext'
import { Loader } from '../../Components/index'
//import Style from './Model.module.css'
const Model = ({ openModel, title ,head , info ,smallInfo , functionName , address }) => {

  const [name, setName] = useState('');
  const [accountAddress, setAccountAddress] = useState("");
  const {loading} = useContext(ChatContext);
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
        </div>

        <div className={Style.Model_box_right}>
            <h1>
              {title} <span>{head}</span>
            </h1>
            <p>
              {info}
            </p>
            <small>
              {smallInfo}
            </small>

            {/* LOADER*/}
            {
              loading == true ? (
                <Loader/>
              ) :( 
                <div className={Style.Model_box_right_name}>
                <div className={Style.Model_box_right_name_info}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 18.7083C17.4832 16.375 15.5357 15 12.0001 15C8.46459 15 6.51676 16.375 6 18.7083M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 12C13.3333 12 14 11.2857 14 9.5C14 7.71429 13.3333 7 12 7C10.6667 7 10 7.71429 10 9.5C10 11.2857 10.6667 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <input type='text' placeholder='Type Name' onChange={(e) =>setName(e.target.value) }/>
                </div>

                <div className={Style.Model_box_right_name_info}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6V17C3 18.6569 4.34315 20 6 20H20C20.5523 20 21 19.5523 21 19V16M19 8H5C3.89543 8 3 7.10457 3 6V6C3 4.89543 3.89543 4 5 4H18C18.5523 4 19 4.44772 19 5V8ZM19 8H20C20.5523 8 21 8.44772 21 9V12M21 12H18C16.8954 12 16 12.8954 16 14V14C16 15.1046 16.8954 16 18 16H21M21 12V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input type='text' placeholder={address || "Enter Address..."} onChange={(e) =>setAccountAddress(e.target.value) }/>
                </div>

                <div className={Style.Model_box_right_name_btn}>
                    <button onClick={()=> functionName({name, accountAddress})}>
                      {""}
                      {""}
                      Submit
                    </button>

                    <button onClick={()=> openModel(false)}>
                      {""}
                      
                      {""}
                      CANCEL
                    </button>

                </div>
                
            </div>
              )
            }

           
        </div>
      </div>
    </div>
  )
}

export default Model