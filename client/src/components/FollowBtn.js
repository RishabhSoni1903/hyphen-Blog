import React from 'react'

function FollowBtn({ onClick }) {

    return (
        <button
            onClick={onClick}
            className={"bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"}>
            Follow
        </button>
    )
}

export default FollowBtn
