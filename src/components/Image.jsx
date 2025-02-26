import React from 'react'

const Image = ({ imgUrl }) => {
    return (
        <div className="bg-white">
            <img width={"100%"} src={imgUrl} alt="" />
        </div>
    )
}

export default Image