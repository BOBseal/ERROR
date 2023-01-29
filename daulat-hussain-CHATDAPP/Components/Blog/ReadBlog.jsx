import React from 'react'

const Blog = ({el,i}) => {
  return (
    <div key={i+1}>
        {el.author}
        {el.likes}
        {el.authorAddress}
        {el.title}
        {el.post}
    </div>
  )
}

export default Blog