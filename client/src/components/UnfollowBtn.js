import React from 'react'

function UnfollowBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            className={"text-orange-700 border border-orange-700 hover:bg-orange-800 hover:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"}>
            Unfollow
        </button>
    )
}

export default UnfollowBtn