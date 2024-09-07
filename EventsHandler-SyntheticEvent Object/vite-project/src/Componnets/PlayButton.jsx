import React from 'react'
import "./PlayButton.css"

const PlayButton = ({message,children,onSmash}) => {
    function  handleClick(){
        onSmash()
         }
  return (
   <>
    <button onClick={handleClick}>{children}</button>
    </>
  )
}

export default PlayButton