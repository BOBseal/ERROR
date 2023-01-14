import React,{useEffect} from 'react'
import S from './Card.module.css'
import Link from 'next/link'


const Card = ({readMessage , el , i , readUser}) => {
  return (
    <div>
        <Link href={{pathname: '/' , query:`${el.name}` , address: `${el.pubKey}` }} >
            <div className={S.Card} onClick={()=> readMessage(el.pubKey) , readUser(el.pubKey)}>
                <div className={S.Card_box}>
                    <div className={S.Card_boxLeft}>
                        <>UserNameICon</>

                    </div>

                    <div className={S.Card_boxRight}>
                        <div className={S.Card_boxRight_middle}>
                            <h4>
                                {el.name}
                            </h4>
                            <small>{el.pubKey.slice(21)}..</small>
                        </div>

                        <div className={S.Card_boxRight_end}>
                            <small>
                                {i + 1}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card