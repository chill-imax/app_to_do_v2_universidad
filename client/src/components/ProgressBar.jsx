import React from 'react'

const ProgressBar = ({progress}) =>  {
  return (
   <>
    {/**outer-bar */}
    <div className="w-[20%] h-[14%] bg-menta rounded-lg overflow-hidden ">
      {/**inner-bar */}
      <div className=' h-[14%] bg-menta' style={{width: `${progress}%` }}>

      </div>
    </div>
   </>


  )
}

export default ProgressBar
