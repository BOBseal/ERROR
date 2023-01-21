import Style from './NavBar.module.css'
import React,{useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChatContext } from '../../context/ChatContext';
import { Model, Error } from '../index';
import images from '../../IMAGES/index'


const NavBar = () => {
  const menuItems = [
    {
      menu : "UserList",
      link: "alluser"
    },
    {
      menu : "CHAT",
      link: "/"
    },
    {
      menu : "BLACKBOARD",
      link: "/blog"
    },
    {
      menu : "ToDo",
      link: "/todo"
    },
    {
      menu : "WORMHOLE",
      link: "/Transfer"
    },
    {
      menu : "ABOUT",
      link: "/about"
    },
  ] ;

  const [active , setActive] = useState(2);
  const [open , setOpen] = useState(false);
  const [openModel , setOpenModel] = useState(false);
  const {account , userName ,createAccount, connectWallet ,error} = useContext(ChatContext);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavMainBox}> 


          <div className={Style.NavBox_left}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="69px" height="69px" viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M1190 2331 c0 -5 -17 -11 -37 -14 -168 -25 -212 -38 -346 -102 -90
          -43 -182 -110 -267 -195 -69 -69 -160 -186 -160 -206 0 -7 -4 -14 -8 -16 -26
          -10 -112 -246 -111 -302 1 -39 2 -37 16 24 13 55 39 123 96 250 6 14 24 41 39
          61 15 20 28 41 28 47 0 5 7 12 15 16 8 3 15 11 15 19 0 16 162 177 179 177 6
          0 14 7 17 15 4 8 11 15 16 15 6 0 27 13 47 28 20 15 47 33 61 39 236 106 285
          117 520 110 201 -6 259 -17 380 -76 47 -22 89 -41 94 -41 4 0 25 -13 46 -30
          21 -16 42 -30 48 -30 5 0 12 -7 16 -15 3 -8 11 -15 19 -15 17 0 207 -199 207
          -217 0 -3 13 -22 28 -42 15 -20 35 -52 44 -71 52 -115 78 -182 91 -240 14 -61
          15 -62 16 -24 1 56 -85 292 -111 302 -4 2 -8 9 -8 16 0 19 -81 124 -152 198
          -148 152 -348 262 -528 290 -36 5 -80 12 -97 15 -18 3 -33 9 -33 14 0 5 -40 9
          -90 9 -49 0 -90 -4 -90 -9z"/>
          <path d="M1132 2268 c-9 -3 -26 -18 -36 -32 -14 -19 -28 -26 -52 -26 -19 0
          -34 -4 -34 -9 0 -5 -10 -12 -22 -16 -13 -3 -34 -11 -47 -18 -33 -16 -163 -146
          -186 -184 -11 -18 -23 -33 -27 -33 -4 0 -8 -22 -8 -48 0 -26 -6 -54 -12 -60
          -8 -8 -13 -43 -13 -93 0 -72 2 -83 23 -99 15 -13 22 -29 22 -54 0 -20 -3 -36
          -7 -36 -18 0 -33 -59 -33 -129 0 -70 2 -79 30 -111 16 -19 30 -41 30 -48 0 -7
          7 -15 15 -18 8 -4 15 -12 15 -19 0 -7 7 -15 15 -19 22 -8 21 -106 -1 -106 -12
          0 -14 -9 -12 -42 3 -45 28 -67 28 -24 0 13 5 28 10 31 13 8 13 116 0 149 -5
          14 -16 26 -25 26 -8 0 -15 7 -15 14 0 8 -11 27 -25 42 -14 15 -25 35 -25 45 0
          11 -4 19 -10 19 -6 0 -10 30 -10 70 0 39 4 70 9 70 5 0 15 16 21 35 6 19 17
          38 24 42 7 5 15 16 19 26 9 23 33 22 40 -3 3 -11 11 -20 19 -20 7 0 22 -20 33
          -43 26 -55 29 -253 5 -282 -12 -14 -16 -54 -18 -171 -4 -146 -3 -153 17 -166
          12 -7 21 -18 21 -25 0 -7 4 -13 10 -13 12 0 103 -62 113 -77 4 -7 34 -15 66
          -19 46 -5 60 -11 64 -25 3 -11 12 -19 19 -19 8 0 20 -11 26 -25 6 -14 18 -25
          27 -25 8 0 15 -4 15 -8 0 -5 11 -14 24 -22 13 -7 26 -20 29 -29 2 -9 17 -22
          33 -29 16 -8 46 -22 66 -33 20 -10 56 -19 80 -19 l43 0 -4 -97 c-2 -58 -8
          -101 -15 -106 -7 -6 -4 -7 7 -3 10 3 21 6 23 6 2 0 4 35 4 78 0 122 0 122 81
          122 39 0 69 4 69 10 0 6 8 10 18 10 35 1 112 90 112 130 0 11 5 20 10 20 6 0
          10 41 10 103 0 57 4 107 9 112 14 15 30 345 22 450 -3 28 1 84 8 125 10 62 9
          95 -4 195 -9 66 -20 128 -26 137 -5 10 -9 26 -9 37 0 11 -3 21 -7 23 -12 5
          -43 64 -43 81 0 25 -96 117 -128 123 -16 3 -44 19 -63 35 -19 16 -44 32 -56
          35 -13 4 -23 10 -23 15 0 5 -16 9 -35 9 -24 0 -35 5 -35 15 0 8 -7 15 -15 15
          -8 0 -24 9 -36 21 -19 19 -30 20 -135 17 -63 -2 -123 -6 -132 -10z m532 -283
          c3 -9 18 -15 37 -15 25 0 41 -10 71 -42 21 -23 37 -49 36 -57 -1 -9 5 -31 15
          -50 9 -19 17 -51 17 -72 0 -21 5 -41 11 -44 26 -16 2 -39 -51 -49 -50 -10 -57
          -15 -73 -48 -9 -21 -22 -38 -27 -38 -6 0 -10 -11 -10 -25 0 -16 6 -25 15 -25
          17 0 33 -35 42 -88 3 -18 14 -38 23 -45 10 -7 20 -28 22 -47 3 -33 1 -35 -31
          -38 -23 -2 -35 -9 -39 -24 -3 -14 -10 -18 -26 -14 -11 3 -38 6 -58 6 -21 0
          -38 5 -38 11 0 13 -20 33 -42 41 -20 8 -13 48 8 48 15 0 19 16 6 23 -12 8 -52
          -30 -52 -49 0 -10 7 -26 17 -36 15 -17 14 -18 -25 -18 -23 0 -42 -4 -42 -10 0
          -5 -11 -10 -24 -10 -14 0 -28 -5 -31 -10 -4 -6 -10 -8 -14 -6 -4 3 -17 -4 -29
          -14 -12 -11 -30 -20 -41 -20 -10 0 -21 -7 -25 -15 -7 -19 -26 -19 -26 0 0 8
          -7 15 -15 15 -12 0 -15 13 -15 60 0 33 -4 60 -10 60 -5 0 -10 6 -10 14 0 8
          -16 16 -40 20 -22 3 -40 11 -40 16 0 6 -8 14 -17 17 -27 10 -50 35 -55 58 -2
          11 -11 19 -21 19 -15 -2 -17 8 -17 72 0 62 3 77 23 98 40 44 47 55 47 76 0 11
          6 20 13 20 7 0 18 9 25 20 7 11 21 20 32 20 24 0 28 45 5 54 -8 3 -15 12 -15
          21 0 8 -5 24 -12 34 -15 24 -4 51 21 51 10 0 21 7 25 15 3 8 14 15 25 15 11 0
          23 5 26 10 4 6 83 10 205 10 167 0 199 -2 204 -15z m192 -397 c4 -6 8 -25 10
          -42 l2 -31 -18 23 c-26 32 -95 32 -104 0 -4 -17 -8 -20 -17 -11 -20 20 -6 48
          26 51 17 2 34 8 40 13 13 13 52 11 61 -3z m-21 -77 c-6 -5 -25 10 -25 20 0 5
          6 4 14 -3 8 -7 12 -15 11 -17z m-65 -11 c0 -5 18 -10 39 -10 38 0 68 -19 43
          -28 -14 -4 -16 -58 -3 -66 5 -3 12 -38 16 -76 7 -71 0 -97 -40 -137 -14 -13
          -35 1 -35 24 0 7 -4 13 -10 13 -5 0 -10 7 -10 15 0 8 3 15 8 15 4 0 16 16 27
          36 15 29 17 39 7 55 -7 10 -12 28 -12 39 0 11 -7 23 -15 26 -9 4 -15 19 -15
          39 0 19 -4 37 -10 40 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -4 10 -10z
          m-100 -359 c5 -11 10 -22 10 -25 0 -3 -38 -6 -85 -6 -47 0 -85 2 -85 5 0 3 8
          14 17 25 25 29 127 29 143 1z"/>
          <path d="M1335 1757 c-11 -7 -22 -14 -25 -17 -3 -3 -17 -11 -32 -17 -16 -7
          -28 -19 -28 -28 0 -8 -4 -15 -10 -15 -5 0 -10 -4 -10 -10 0 -11 59 -14 84 -4
          9 3 16 12 16 20 0 21 94 19 120 -3 17 -15 58 -30 137 -50 39 -9 95 6 91 25 -2
          9 -11 18 -22 20 -10 2 -27 13 -37 23 -11 11 -24 17 -30 13 -10 -5 -54 11 -69
          26 -30 30 -145 41 -185 17z"/>
          <path d="M1362 1629 c-13 -5 -21 -13 -17 -19 11 -18 69 -39 128 -46 66 -7 71
          1 27 46 -24 24 -37 30 -72 29 -24 0 -53 -4 -66 -10z m58 -20 c0 -18 -2 -19
          -15 -9 -15 12 -12 30 6 30 5 0 9 -10 9 -21z"/>
          <path d="M1605 1320 c-9 -15 -7 -16 43 -24 38 -6 43 -4 40 11 -4 21 -72 31
          -83 13z"/>
          <path d="M790 1579 c0 -6 -7 -17 -15 -25 -8 -9 -15 -26 -15 -39 0 -13 -4 -27
          -10 -30 -5 -3 -10 -13 -10 -21 0 -8 5 -14 10 -14 6 0 10 7 10 15 0 8 7 15 15
          15 9 0 19 8 22 18 4 9 15 24 25 32 23 19 14 60 -13 60 -11 0 -19 -5 -19 -11z"/>
          <path d="M840 1471 c0 -5 8 -12 18 -14 14 -4 14 -5 1 -6 -16 -1 -29 -39 -29
          -86 0 -13 -7 -26 -16 -29 -24 -9 -26 -8 -19 14 4 14 2 20 -9 20 -8 0 -17 13
          -21 30 -4 17 -11 30 -16 30 -12 0 -12 -37 1 -45 6 -3 10 -15 10 -25 0 -13 16
          -27 52 -44 28 -14 55 -23 60 -20 16 10 9 73 -9 83 -14 8 -15 13 -5 19 7 5 15
          25 19 45 5 33 3 37 -16 37 -11 0 -21 -4 -21 -9z"/>
          <path d="M247 1443 c-4 -3 -7 -21 -7 -40 0 -18 -4 -33 -10 -33 -6 0 -10 -37
          -10 -90 0 -53 4 -90 10 -90 6 0 10 -12 10 -27 0 -16 5 -35 10 -43 6 -10 10 42
          10 158 0 94 -1 172 -3 172 -2 0 -7 -3 -10 -7z"/>
          <path d="M2300 1278 c0 -115 4 -168 10 -158 5 8 10 27 10 43 0 15 5 27 10 27
          6 0 10 37 10 90 0 53 -4 90 -10 90 -5 0 -10 15 -10 34 0 19 -4 38 -10 41 -7 4
          -10 -54 -10 -167z"/>
          <path d="M261 1064 c-2 -80 86 -287 170 -399 58 -78 159 -179 239 -238 105
          -79 317 -168 394 -166 38 1 37 2 -24 16 -58 13 -125 39 -240 91 -19 9 -51 29
          -71 44 -20 15 -39 28 -42 28 -18 0 -217 190 -217 207 0 8 -7 16 -15 19 -8 4
          -15 11 -15 16 0 6 -13 27 -30 48 -16 21 -30 45 -30 53 0 8 -7 20 -15 27 -8 7
          -15 19 -15 26 0 8 -13 42 -29 76 -16 35 -36 92 -44 128 -14 61 -15 62 -16 24z"/>
          <path d="M2282 1040 c-7 -36 -26 -93 -43 -128 -16 -34 -29 -68 -29 -76 0 -7
          -7 -19 -15 -26 -8 -7 -15 -19 -15 -27 0 -8 -13 -32 -30 -53 -16 -21 -30 -40
          -30 -43 0 -22 -225 -247 -247 -247 -3 0 -22 -13 -43 -30 -21 -16 -45 -30 -53
          -30 -8 0 -20 -7 -27 -15 -7 -8 -19 -15 -26 -15 -8 0 -42 -13 -76 -29 -35 -16
          -92 -36 -128 -44 -61 -14 -62 -15 -24 -16 76 -2 288 87 394 165 71 53 191 173
          244 244 80 109 170 325 164 397 -3 35 -4 33 -16 -27z"/>
          <path d="M770 917 c0 -30 -3 -57 -7 -61 -9 -9 -10 -14 -12 -64 -1 -26 -10 -49
          -26 -68 -14 -16 -25 -34 -25 -40 0 -6 -7 -25 -16 -43 -9 -18 -13 -35 -10 -38
          8 -8 34 26 42 55 3 12 12 22 19 22 13 0 35 78 35 125 0 16 6 25 15 25 12 0 15
          14 15 70 0 56 -3 70 -15 70 -11 0 -15 -13 -15 -53z"/>
          <path d="M1115 250 c3 -5 22 -10 41 -10 19 0 34 -4 34 -10 0 -6 37 -10 90 -10
          53 0 90 4 90 10 0 6 12 10 28 10 15 0 34 5 42 10 10 6 -43 10 -158 10 -113 0
          -171 -3 -167 -10z"/>
          </g>
          </svg>
          </div>

          <div className={Style.NavBox_right}>
            
            
              {/* desktop*/ }
              <div className={Style.RightNavbarMenu}>
                {menuItems.map((el , i) => (
                  <div onClick={()=> setActive(i+1)} key={1+1}
                  className={`${Style.RightNavbarMenuItems} ${active == i + 1 ? Style.active_btn : ""}`}
                  >
                    <Link className={Style.RightNavbarMenuItemsLink} href={el.link}>
                      {el.menu}
                    </Link>
                  </div>
                ))}
              </div>


                  {/* Mobile */}

                {open && (  <div className={Style.MobileMenu}>
                {menuItems.map((el , i) => (
                  <div onClick={()=> setActive(i+1)} key={i+1}
                  className={`${Style.MobileMenuItems} ${active == i + 1 ? Style.active_btn : ""}`}
                  >
                    <Link className={Style.MobileMenuItemsLink} href={el.link}>
                      {el.menu}
                    </Link>
                  </div>
                ))}

                <p className={Style.MobileMenuBtn}>
                    <div onClick={ () => setOpen(false)}> 
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9.00004L9 15M15 15L9 9.00004M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>        {/*  Insert Close Button Graphic*/}
                </p>
              </div>
              ) }

              {/*CONNECT WALLET*/}

                  <div className={Style.NavbarConnectBtn}>
                    {account == "" ? (
                      <button onClick={ ()=>connectWallet()}>
                        {""}
                        <span>Connect Wallet</span>
                      </button>
                    ):(
                      <button className={Style.aa} onClick={()=> setOpenModel(true)}> 
                        {""} 
                           {userName ? <>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7C15 9.76142 12.7614 12 10 12C7.23858 12 5 9.76142 5 7ZM10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4Z" fill="#152C70"/>
                            <path d="M4.00242 20C4.07771 17.7781 5.90263 16 8.14286 16H9C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14H8.14286C4.75025 14 2 16.7503 2 20.1429C2 21.1685 2.83147 22 3.85714 22H10C10.5523 22 11 21.5523 11 21C11 20.4477 10.5523 20 10 20H4.00242Z" fill="#152C70"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22ZM17.0303 19.0303L19.5303 16.5303C19.8232 16.2374 19.8232 15.7626 19.5303 15.4697C19.2374 15.1768 18.7626 15.1768 18.4697 15.4697L16.5 17.4393L16.0303 16.9697C15.7374 16.6768 15.2626 16.6768 14.9697 16.9697C14.6768 17.2626 14.6768 17.7374 14.9697 18.0303L15.9692 19.0298C16.2621 19.3227 16.7374 19.3232 17.0303 19.0303Z" fill="#4296FF"/>
                            </svg>
                           </> :<>
                            <svg fill="#000000" width="30px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM16 6c-5.522 0-10 4.477-10 10 0 5.522 4.478 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10zM19.988 17h-3v3c0 0.553-0.448 1-1 1-0.553 0-1-0.447-1-1v-3h-3c-0.553 0-1-0.448-1-1s0.447-1 1-1h3v-3c0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1v3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
                            </svg>
                           </> }
                           {""}
                           <small> {userName.slice(0,5)  || "Create Account "}</small>
                      </button>
                    )}
                  </div>

                  <div className={Style.NavBarBoxRightOpen} onClick={()=> setOpen(true)}>
                  <svg width="100px" height="55px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path d="M4 10C4 8.89543 4.89543 8 6 8H19L24 14H42C43.1046 14 44 14.8954 44 16V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V10Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                  <path d="M23.9497 22.5L23.9497 34.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.9497 28.5L29.9497 28.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>

          </div>
      </div>

      {/*ModelComponent*/}

      {openModel &&(
       <div className={Style.ModelBoxx}> 
         <Model openModel={setOpenModel}
         title = "Welcome to"
         head = "BOB Chat"
         info='A Decentralized Chat Protocol with Censorship Resistance Built for EVM Blockchains. Serves the Best Use Case for Publishing and Storing Chats/Texts Directly onto reputed DLTs'
         smallInfo= "INSCRIBE PERSONA"
         functionName= {createAccount}
         address = {account}
         />
        
         </div> 
      )}

      { error == ""? "" : <Error error = {error}/> } 
    </div>
  )
}

export default NavBar