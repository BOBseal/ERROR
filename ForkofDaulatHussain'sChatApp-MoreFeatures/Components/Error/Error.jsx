import React from 'react'
import Style from './Error.module.css'


const Error = ({error}) => {
  return (
    <div className={Style.Error}>
      <div className={Style.Error_box}> 
          <h1>
           {" OOPS SOMETHING WENT WRONG!"}
          </h1>
          <h2> 
           {"Reload Browser and Retry"} 
          </h2>
         <> Your Error : {error} </>
      </div>
    </div>
  )
}

export default Error