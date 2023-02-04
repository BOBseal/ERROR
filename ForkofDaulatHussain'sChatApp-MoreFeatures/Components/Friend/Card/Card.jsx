import React,{useEffect} from 'react'
import S from './Card.module.css'
import Link from 'next/link'


const Card = ({readMessage , el , i , readUser}) => {
  return (
    <div className={S.men}>
        <h2 className={S.ft}> <div className={S.no} >No. </div> : <div className={S.ss}>{i+1} </div></h2>
        <Link href={{pathname: '/' , query:`${el.name}` , address: `${el.pubKey}` }} >
            <div className={S.Card} onClick={()=> (readMessage(el.pubKey) , readUser(el.pubKey))}>
                <div className={S.Card_box}>
                    <div className={S.Card_boxLeft}>

                    </div>

                    <div className={S.Card_boxRight}>
                        <div className={S.Card_boxRight_middle}>
                            <h4>
                               name: {el.name}
                            </h4>
                            <small>Address: 0x...{el.pubKey.slice(34)}</small>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card