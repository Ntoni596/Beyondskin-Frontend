import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div id="loading">
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#fff" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
    </div>
  )
}

export default Loading