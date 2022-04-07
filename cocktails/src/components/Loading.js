import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className='loading'>
            <div className="loading__wrapper">
                <span className='loading__span'>
                    Loading...
                </span>
            </div>
        </div>
    )
}

export default Loading