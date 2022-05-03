import React from "react"

const Common = ({ title }) => {
  return (
    <>
      <div className='sideHeading'>
        <h1>
          <i class='fas fa-minus'></i>
          {title}
        </h1>
      </div>
    </>
  )
}

export default Common
